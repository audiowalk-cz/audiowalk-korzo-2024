import { Injectable } from "@angular/core";
import { PlayerController, PlayerControllerOptions } from "@audiowalk/sdk";
import axios from "axios";
import { BehaviorSubject, Subject } from "rxjs";
import { TrackId, Tracks } from "../../data/tracks";
import { FileStorageService } from "./file-storage.service";
import { LocalStorageService } from "./local-storage.service";

export enum DownloadStatus {
  Checking = "checking",
  NotDownloaded = "not-downloaded",
  Downloading = "downloading",
  Downloaded = "downloaded",
  Error = "error",
}

export interface BaseTrackDefinition {
  id: string;
  url: string;
  type: string;
  mimeType: string;
  preloadController?: boolean;
  placeholderImage?: string;
  title?: string;
  playerOptions?: Partial<PlayerControllerOptions>;
}

export interface AudioTrackDefinition extends BaseTrackDefinition {
  id: string;
  url: string;
  type: "audio";
  mimeType: string;
  placeholderImage?: string;
}

export interface VideoTrackDefinition extends BaseTrackDefinition {
  id: string;
  url: string;
  type: "video";
  mimeType: string;
  placeholderImage: string;
}

export type TrackDefinition = AudioTrackDefinition | VideoTrackDefinition;

export interface TrackMeta {
  isDownloaded?: boolean;
  progress?: number;
  controller?: PlayerController;
}

export type Track = TrackDefinition & TrackMeta;

@Injectable({
  providedIn: "root",
})
export class MediaService {
  downloadStatus = new BehaviorSubject<DownloadStatus>(DownloadStatus.NotDownloaded);
  downloadProgress = new BehaviorSubject<number>(0);

  readonly jingleController = new PlayerController("jingle", Tracks.jingle.url, { keepPlayer: true });
  readonly ambientController = new PlayerController("ambient", Tracks.ambient_FF.url, {
    keepPlayer: true,
    loop: true,
    crossfade: true,
  });

  constructor(
    private fileStorageService: FileStorageService,
    private localStorageService: LocalStorageService,
  ) {
    this.updateDownloadStatus();
  }

  async getTracks(): Promise<Track[]> {
    return Promise.all(Object.values(Tracks).map((trackDef) => this.getTrack(trackDef.id)));
  }

  async getTrack(trackId: TrackId): Promise<Track> {
    const trackDef = Tracks[trackId];
    if (!trackDef) throw new Error(`Track ${trackId} not found`);

    const storedData = await this.fileStorageService.get<ArrayBuffer>(trackDef.id).catch(() => null);
    const url = storedData ? URL.createObjectURL(new Blob([storedData], { type: trackDef.mimeType })) : trackDef.url;
    const isDownloaded = !!storedData;

    const progress = await this.localStorageService
      .get(`progress-${trackDef.id}`)
      .catch(() => null)
      .then((value) => (value ? (parseFloat(value) ?? 0) : undefined));

    return { ...trackDef, url, progress, isDownloaded };
  }

  async getTrackController(
    trackId: TrackId,
    options: Partial<PlayerControllerOptions> = {},
  ): Promise<PlayerController> {
    const track = await this.getTrack(trackId);

    if (!track.controller) {
      track.controller = new PlayerController(track.id, track.url, {
        ...options,
        ...track.playerOptions,
      });
    }

    return track.controller;
  }

  private async updateDownloadStatus(): Promise<void> {
    this.downloadStatus.next(DownloadStatus.Checking);

    const downloadStatus = await this.getTracks()
      .catch(() => [])
      .then((tracks) => tracks.every((track) => track.isDownloaded));

    this.downloadStatus.next(downloadStatus ? DownloadStatus.Downloaded : DownloadStatus.NotDownloaded);
  }

  async downloadTracks() {
    const trackDefs = Object.values(Tracks);

    this.downloadStatus.next(DownloadStatus.Downloading);
    this.downloadProgress.next(0);

    try {
      for (let [i, track] of trackDefs.entries()) {
        const trackProgress = new Subject<number>();
        trackProgress.subscribe((progress) =>
          this.downloadProgress.next((i * 1) / trackDefs.length + progress / trackDefs.length),
        );

        await this.downloadTrack(track, trackProgress);
      }
      this.downloadStatus.next(DownloadStatus.Downloaded);
    } catch (e) {
      this.downloadStatus.next(DownloadStatus.Error);
    }
  }

  async preloadControllers() {
    const controllers = [this.jingleController, this.ambientController];

    for (let controller of controllers) {
      await controller.preload();
    }
  }

  async deleteTracks() {
    const trackDefs = Object.values(Tracks);

    for (let [i, track] of trackDefs.entries()) {
      await this.fileStorageService.delete(track.id).catch();
    }

    await this.updateDownloadStatus();
  }

  playJingle() {
    this.jingleController.play();
  }

  playAmbient(trackId: TrackId) {
    this.getTrack(trackId).then((track) => {
      this.ambientController.open(track.url);
      this.ambientController.play();
    });
    return this.ambientController;
  }

  private async downloadTrack(trackDef: TrackDefinition, progress: Subject<number>) {
    console.debug("Downloading track", trackDef.id, trackDef.url);
    const res = await axios.get<ArrayBuffer>(trackDef.url, {
      responseType: "arraybuffer",
      onDownloadProgress: (e: any) => {
        if (e.total) progress.next(e.loaded / e.total);
      },
    });

    await this.fileStorageService.put(trackDef.id, res.data);
  }
}
