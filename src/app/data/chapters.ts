import { ChapterInfoComponent } from "../components/chapter-info/chapter-info.component";
import { StoryState } from "./story";
import { TrackId } from "./tracks";

// common things to export to StoryController
export interface ChapterComponent {}

export interface ChapterDefinition<I = string, D = never> {
  id: I;
  component: new () => ChapterComponent;
  nextChapter: ChapterId | ((state: StoryState) => ChapterId) | null;
  data: D;
}

export type ChaptersDefinition<I extends string, D> = { [key in I]: ChapterDefinition<I, D> };

// app specific things
export enum ChapterId {
  "co-se-stalo" = "co-se-stalo",
  "stretnuti-s-letaky-a-pradlem" = "stretnuti-s-letaky-a-pradlem",
  "ty-jsi-tam-bil-taky" = "ty-jsi-tam-bil-taky",
  "citlive-materialy" = "citlive-materialy",
  "ve-skole-zivota-neni-prazdnin" = "ve-skole-zivota-neni-prazdnin",
  "divadelni-stavka" = "divadelni-stavka",
  "co-bude-pak" = "co-bude-pak",
}

export interface ChapterData {
  directions: string;
  durationMinutes: number;
  title: string;
  description: string;
  track?: TrackId;
  pathIndex: number;
}

export const Chapters: ChaptersDefinition<ChapterId, ChapterData> = {
  "co-se-stalo": {
    id: ChapterId["co-se-stalo"],
    component: ChapterInfoComponent,
    nextChapter: ChapterId["stretnuti-s-letaky-a-pradlem"],
    data: {
      title: "Co se stalo?",
      directions:
        "Jděte Divadelní ulicí, kolem divadla Na&nbsp;Zábradlí a Královskou cestou až před Divadelní&nbsp;fakultu&nbsp;AMU.",
      durationMinutes: 14,
      description: "",
      pathIndex: 0,
      track: TrackId["track-1"],
    },
  },

  "stretnuti-s-letaky-a-pradlem": {
    id: ChapterId["stretnuti-s-letaky-a-pradlem"],
    component: ChapterInfoComponent,
    nextChapter: ChapterId["ty-jsi-tam-bil-taky"],
    data: {
      title: "Střetnutí s&nbsp;letáky a&nbsp;prádlem",
      directions:
        "Vydejte se k restaraci U Vejvodů. Na křižovatce zahněte doprava do Husové, dále za kostelem doleva Zlatou ulicí a&nbsp;pak hned doprava.",
      durationMinutes: 3,
      description: "",
      pathIndex: 1,
      track: TrackId["track-2"],
    },
  },

  "ty-jsi-tam-bil-taky": {
    id: ChapterId["ty-jsi-tam-bil-taky"],
    component: ChapterInfoComponent,
    nextChapter: ChapterId["citlive-materialy"],
    data: {
      title: "Ty jsi tam b<span class='text-danger'>i</span>l taky?",
      directions:
        "Jděte do ulice Na Perštýně, zahněte do Bartolomějské k&nbsp;Hlavnímu sídlu StB (kachličkovaný dům s&nbsp;pověstným sklepením).",
      durationMinutes: 10,
      description: "",
      pathIndex: 2,
      track: TrackId["track-3"],
    },
  },

  "citlive-materialy": {
    id: ChapterId["citlive-materialy"],
    component: ChapterInfoComponent,
    nextChapter: ChapterId["ve-skole-zivota-neni-prazdnin"],
    data: {
      title: "Citlivé materiály",
      directions:
        "Pokračujte Bartolomějskou k&nbsp;Vltavě, poté doleva v Divadelní ulicí podchodem až do&nbsp;ulice Na&nbsp;Struze k&nbsp;archivu StB (dnes Archiv bezp. složek).",
      durationMinutes: 7,
      description: "",
      pathIndex: 3,
      track: TrackId["track-4"],
    },
  },

  "ve-skole-zivota-neni-prazdnin": {
    id: ChapterId["ve-skole-zivota-neni-prazdnin"],
    component: ChapterInfoComponent,
    nextChapter: ChapterId["divadelni-stavka"],
    data: {
      title: "Ve škole života není prázdnin",
      directions:
        "Vydejte se směrem ke stanici Národní třída.<br>Pokud bude otevřený, využijte průchod na&nbsp;zastávku Lazarská až k&nbsp;pedagogické fakultě UK.",
      durationMinutes: 9,
      description: "",
      pathIndex: 4,
      track: TrackId["track-5"],
    },
  },

  "divadelni-stavka": {
    id: ChapterId["divadelni-stavka"],
    component: ChapterInfoComponent,
    nextChapter: ChapterId["co-bude-pak"],
    data: {
      title: "Divadelní stávka",
      directions:
        "Pokračujte Vodičkovou, doprava do ulice V&nbsp;Jámě a pak Štěpánskou pasáží projděte před Činoherní klub",
      durationMinutes: 12,
      description: "",
      pathIndex: 5,
      track: TrackId["track-6"],
    },
  },

  "co-bude-pak": {
    id: ChapterId["co-bude-pak"],
    component: ChapterInfoComponent,
    nextChapter: null,
    data: {
      title: "Co bude pak?",
      directions:
        "Jděte na Václavské náměstí dolu k&nbsp;tramvajím před balkon paláce Hvězda (dříve Melantrich, dnes M&amp;S)",
      durationMinutes: 6,
      description: "",
      pathIndex: 6,
      track: TrackId["track-7"],
    },
  },
};
