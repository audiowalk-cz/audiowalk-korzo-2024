import { BasicStoryState } from "@audiowalk/sdk";
import { Chapter, Story } from "../story/components/story-container/story-container.component";
import { BasicWalkComponent } from "../story/story-components/basic-walk/basic-walk.component";
import { CheckpointComponent } from "../story/story-components/checkpoint/checkpoint.component";
import { InteractionComponent } from "../story/story-components/interaction/interaction.component";
import { MapWalkComponent } from "../story/story-components/map-walk/map-walk.component";
import { MaterialsComponent } from "../story/story-components/materials/materials.component";
import { TrackId } from "./tracks";

export enum ChapterId {
  "intro_1_1" = "intro_1_1",
  "interakce_ff" = "interakce_ff",
  "prechod_1_2" = "prechod_1_2",
  "prechod_1_3" = "prechod_1_3",
  "interakce_park" = "interakce_park",
  "prechod_1_4" = "prechod_1_4",
  "checkpoint_konicek" = "checkpoint_konicek",
  "prechod_1_5" = "prechod_1_5",
  "interakce_konicek" = "interakce_konicek",
  "prechod_1_6A" = "prechod_1_6A",
  "prechod_1_6B" = "prechod_1_6B",
  "materialy_1A" = "materialy_1A",
  "materialy_1B" = "materialy_1B",
  "prechod_2_1" = "prechod_2_1",
  "checkpoint_marianske" = "checkpoint_marianske",
  "interakce_marianske" = "interakce_marianske",
  "prechod_2A_2" = "prechod_2A_2",
  "checkpoint_damu" = "checkpoint_damu",
  "interakce_damu_1" = "interakce_damu_1",
  "interakce_damu_2" = "interakce_damu_2",
  "interakce_damu_3" = "interakce_damu_3",
  "interakce_damu_4" = "interakce_damu_4",
  "interakce_damu_5" = "interakce_damu_5",
  "prechod_2A_3" = "prechod_2A_3",
  "prechod_2A_3_ke_klementinu" = "prechod_2A_3_ke_klementinu",
  "checkpoint_klementinum_a" = "checkpoint_klementinum_a",
  "prechod_2A_3_klementinum" = "prechod_2A_3_klementinum",
  "prechod_2A_4" = "prechod_2A_4",
  "prechod_2B_2" = "prechod_2B_2",
  "checkpoint_klementinum_b" = "checkpoint_klementinum_b",
  "prechod_2B_3" = "prechod_2B_3",
  "interakce_klementinum" = "interakce_klementinum",
  "prechod_2B_4" = "prechod_2B_4",
  "checkpoint_betlemske" = "checkpoint_betlemske",
  "interakce_betlemske_1" = "interakce_betlemske_1",
  "interakce_betlemske_2" = "interakce_betlemske_2",
  "prechod_2B_5" = "prechod_2B_5",
  "prechod_2B_6" = "prechod_2B_6",
  "checkpoint_materialy_2" = "checkpoint_materialy_2",
  "materialy_2" = "materialy_2",
  "prechod_3A_1" = "prechod_3A_1",
  "interakce_cigo_A" = "interakce_cigo_A",
  "prechod_3A_2" = "prechod_3A_2",
  "prechod_3B_1" = "prechod_3B_1",
  "interakce_cigo_B" = "interakce_cigo_B",
  "prechod_3B_2" = "prechod_3B_2",
  "prechod_3_3" = "prechod_3_3",
  "checkpoint_bartolomejska" = "checkpoint_bartolomejska",
  "interakce_bartolomejska" = "interakce_bartolomejska",
  "prechod_4_1" = "prechod_4_1",
  "prechod_4_2A" = "prechod_4_2A",
  "prechod_4_2B" = "prechod_4_2B",
  "interakce_roh_narodni" = "interakce_roh_narodni",
  "prechod_5" = "prechod_5",
}

export interface StoryState extends BasicStoryState<ChapterId> {
  interakce_FF?: string;
  interakce_park?: string;
  interakce_konicek?: "a" | "b";
  interakce_marianske?: string;
  interakce_damu_1?: string;
  interakce_damu_2?: string;
  interakce_damu_3?: string;
  interakce_damu_4?: string;
  interakce_damu_5?: string;
  interakce_klementinum?: string;
  interakce_bartolomejska?: string;
  interakce_roh_narodni?: string;
  interakce_betlemske_1?: string;
  interakce_betlemske_2?: string;
  interakce_cigo_A?: string;
  interakce_cigo_B?: string;
}

export interface ChapterMetadata {
  /** Titulek se zobrazi v prehravaci na zamknute obrazovce */
  title: string;

  /** Zobrazit v seznamu kapitol pro spusteni v napovede */
  respawn?: {
    location: string;
    locationMapUrl: string;
  };
}

export const story: Story<ChapterId, StoryState, ChapterMetadata> = {
  initialState: {
    currentChapter: ChapterId.intro_1_1,
  },
  chapters: {
    intro_1_1: new Chapter(ChapterId.intro_1_1, {
      component: BasicWalkComponent,
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.intro_1_1,
        storyDate: "16/11/1989",
      },
      metadata: {
        title: "1. kapitola",
        respawn: {
          location: "před Fildou",
          locationMapUrl:
            "https://en.mapy.cz/zakladni?source=coor&id=14.415489122623967%2C50.08903446030233&x=14.4158585&y=50.0889730&z=17",
        },
      },
      nextChapter: ChapterId.interakce_ff,
    }),

    interakce_ff: new Chapter(ChapterId.interakce_ff, {
      component: InteractionComponent,
      data: {
        ambientTrack: TrackId.ambient_FF,
        question: "Tak vyrazíme?",
        answerProperty: "interakce_FF",
        options: [
          {
            label: "Jasně!",
            value: "a",
          },
        ],
      },
      metadata: {
        title: "Kapitola 1.1",
        location: "před Fildou",
        locationMapUrl:
          "https://en.mapy.cz/zakladni?source=coor&id=14.415489122623967%2C50.08903446030233&x=14.4158585&y=50.0889730&z=17",
      },
      nextChapter: ChapterId.prechod_1_2,
    }),

    prechod_1_2: new Chapter(ChapterId.prechod_1_2, {
      component: BasicWalkComponent,
      data: {
        imageUrl: "assets/images/chapters/1_2.png",
        track: TrackId.prechod_1_2,
        storyDate: "16/11/1989",
      },
      metadata: {
        title: "Kapitola 1.2",
      },
      nextChapter: ChapterId.prechod_1_3,
    }),

    prechod_1_3: new Chapter(ChapterId.prechod_1_3, {
      component: BasicWalkComponent,
      data: {
        imageUrl: "assets/images/chapters/1_3.png",
        track: TrackId.prechod_1_3,
        storyDate: "16/11/1989",
      },
      metadata: {
        title: "Kapitola 1.3",
      },
      nextChapter: ChapterId.interakce_park,
    }),

    interakce_park: new Chapter(ChapterId.interakce_park, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 1.4",
      },
      data: {
        ambientTrack: TrackId.ambient_park,
        question: "Chceš na to něco říct?",
        answerProperty: "interakce_park",
        options: [
          {
            label: "Takže se to snažíte reformovat zevnitř, postupně… To dává smysl…",
            value: "a",
          },
          {
            label: "Taky mi nepřijde dobrý spolupracovat se svazákama!",
            value: "b",
          },
          {
            label: "(Nic neříkám.)",
            value: "c",
          },
        ],
      },
      nextChapter: ChapterId.prechod_1_4,
    }),

    prechod_1_4: new Chapter(ChapterId.prechod_1_4, {
      component: BasicWalkComponent,
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_1_4,
        storyDate: "16/11/1989",
      },
      metadata: {
        title: "Kapitola 1.4",
      },
      nextChapter: ChapterId.checkpoint_konicek,
    }),

    checkpoint_konicek: new Chapter(ChapterId.checkpoint_konicek, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 1.4",
      },
      data: {
        question: "Jsi před hospodou U bílého koníčka?",
      },
      nextChapter: ChapterId.prechod_1_5,
    }),

    prechod_1_5: new Chapter(ChapterId.prechod_1_5, {
      component: BasicWalkComponent,
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_1_5,
        storyDate: "16/11/1989",
      },
      metadata: {
        title: "Kapitola 1.5",
      },
      nextChapter: ChapterId.interakce_konicek,
    }),

    interakce_konicek: new Chapter(ChapterId.interakce_konicek, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 1.5",
      },
      data: {
        ambientTrack: TrackId.ambient_konicek,
        question: "S kým souhlasíš?",
        answerProperty: "interakce_konicek",
        options: [
          {
            label: "S Davidem",
            value: "a",
          },
          {
            label: "S Terezou",
            value: "b",
          },
        ],
      },
      nextChapter: (state) => {
        switch (state.interakce_konicek) {
          default:
          case "a":
            return ChapterId.prechod_1_6A;
          case "b":
            return ChapterId.prechod_1_6B;
        }
      },
    }),

    prechod_1_6A: new Chapter(ChapterId.prechod_1_6A, {
      component: BasicWalkComponent,
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_1_6A,
        storyDate: "16/11/1989",
      },
      metadata: {
        title: "Kapitola 1.6",
      },
      nextChapter: ChapterId.materialy_1A,
    }),

    prechod_1_6B: new Chapter(ChapterId.prechod_1_6B, {
      component: BasicWalkComponent,
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_1_6B,
        storyDate: "16/11/1989",
      },
      metadata: {
        title: "Kapitola 1.6",
      },
      nextChapter: ChapterId.materialy_1B,
    }),

    materialy_1A: new Chapter(ChapterId.materialy_1A, {
      component: MaterialsComponent,
      data: {
        track: TrackId.ambient_materialy_1,
        quote: "Prohlédni si materiály:", // TODO: ma tam byt tohle?
        materials: [],
      },
      metadata: {
        title: "Kapitola 1.6",
      },
      nextChapter: ChapterId.prechod_2_1,
    }),

    materialy_1B: new Chapter(ChapterId.materialy_1B, {
      component: MaterialsComponent,
      data: {
        track: TrackId.ambient_materialy_1,
        quote: "Prohlédni si materiály:", // TODO: ma tam byt tohle?
        materials: [],
      },
      metadata: {
        title: "Kapitola 1.6",
      },
      nextChapter: ChapterId.prechod_2_1,
    }),

    prechod_2_1: new Chapter(ChapterId.prechod_2_1, {
      component: BasicWalkComponent,
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_2_1,
        storyDate: "16/11/1989",
      },
      metadata: {
        title: "Kapitola 2.1",
      },
      nextChapter: ChapterId.checkpoint_marianske,
    }),

    checkpoint_marianske: new Chapter(ChapterId.checkpoint_marianske, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 2.1",
      },
      data: {
        question: "Stojíš na Mariánském náměstí?",
      },
      nextChapter: ChapterId.interakce_marianske,
    }),

    interakce_marianske: new Chapter(ChapterId.interakce_marianske, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 2.1",
      },
      data: {
        ambientTrack: TrackId.ambient_marianske,
        question: "Co odpovíš Evě?",
        answerProperty: "interakce_marianske",
        options: [
          {
            label: "Jdu pro letáky!",
            value: "a",
          },
          {
            label: "Hmm, tak já s tebou radši půjdu do Klementina… Zajímá mě, jak to tam vypadá a koho potkáme.",
            value: "b",
          },
        ],
      },
      nextChapter: (state) => {
        switch (state.interakce_marianske) {
          default:
          case "a":
            return ChapterId.prechod_2A_2;
          case "b":
            return ChapterId.prechod_2B_2;
        }
      },
    }),

    prechod_2A_2: new Chapter(ChapterId.prechod_2A_2, {
      component: BasicWalkComponent,
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_2A_2,
        storyDate: "16/11/1989",
      },
      metadata: {
        title: "Kapitola 2.2",
      },
      nextChapter: ChapterId.interakce_damu_1,
    }),

    checkpoint_damu: new Chapter(ChapterId.checkpoint_damu, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 2.2",
      },
      data: {
        question: "Stojíš před Domem U Kamenného zvonu?",
      },
      nextChapter: ChapterId.interakce_damu_1,
    }),

    interakce_damu_1: new Chapter(ChapterId.interakce_damu_1, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 2.2",
      },
      data: {
        ambientTrack: TrackId.ambient_damu,
        question: "Vidíš Julii a Ondru, co uděláš?",
        answerProperty: "interakce_damu_1",
        options: [
          {
            label: "Oslovím je: „Ehm, ahoj, pardon, my jsme se viděli u Koníčka“",
            track: TrackId.interakce_2A_2_int1_a,
            value: "a",
          },
          {
            label: "Zmateně koukám.",
            track: TrackId.interakce_2A_2_int1_b,
            value: "b",
          },
        ],
      },
      nextChapter: ChapterId.interakce_damu_2,
    }),

    interakce_damu_2: new Chapter(ChapterId.interakce_damu_2, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 2.2",
      },
      data: {
        ambientTrack: TrackId.ambient_damu,
        question: "Co řekneš?",
        answerProperty: "interakce_damu_2",
        options: [
          {
            label: "“Eva říkala, že se s tebou domluvila na něčem ohledně nějakých letáků. Ale nakonec nemá čas.”",
            value: "a",
          },
          {
            label:
              "“Eva říkala, že se s tebou domluvila na něčem ohledně nějakých letáků. Ale nakonec se jí do toho nechce…”",
            value: "b",
          },
        ],
      },
      nextChapter: ChapterId.prechod_2A_3,
    }),

    prechod_2A_3: new Chapter(ChapterId.prechod_2A_3, {
      component: BasicWalkComponent,
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_2A_3,
        storyDate: "16/11/1989",
      },
      metadata: {
        title: "Kapitola 2.3",
      },
      nextChapter: ChapterId.interakce_damu_3,
    }),

    interakce_damu_3: new Chapter(ChapterId.interakce_damu_3, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 2.3",
      },
      data: {
        ambientTrack: TrackId.ambient_damu,
        question: "Co řekneš?",
        answerProperty: "interakce_damu_3",
        options: [
          {
            label: "“Počkej, to je dost práce… Fakt budu muset všechno oběhnout?”",
            track: TrackId.interakce_2A_3_int3_a_b,
            value: "a",
          },
          {
            label: "“Počkej, a když si mě někdo všimne, nebude z toho problém?”",
            track: TrackId.interakce_2A_3_int3_a_b,
            value: "b",
          },
          {
            label: "“Jo, jasný, pohoda…”",
            track: TrackId.interakce_2A_3_parada,
            value: "c",
          },
        ],
      },
      nextChapter: (state) => {
        switch (state.interakce_damu_3) {
          case "a":
            return ChapterId.interakce_damu_4;
          case "b":
            return ChapterId.interakce_damu_4;
          default:
          case "c":
            return ChapterId.prechod_2A_4;
        }
      },
    }),

    interakce_damu_4: new Chapter(ChapterId.interakce_damu_4, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 2.3",
      },
      data: {
        ambientTrack: TrackId.ambient_damu,
        question: "Co řekneš?",
        answerProperty: "interakce_damu_4",
        options: [
          {
            label: "“Jo, jasný, pohoda!”",
            track: TrackId.interakce_2A_3_parada,
            value: "a",
          },
          {
            label: "“Hele já se na to asi úplně necítím… Promiň…”",
            track: TrackId.interakce_2A_3_int4_b,
            value: "b",
          },
        ],
      },
      nextChapter: (state) => {
        switch (state.interakce_damu_4) {
          default:
          case "a":
            return ChapterId.prechod_2A_4;
          case "b":
            return ChapterId.interakce_damu_5;
        }
      },
    }),

    interakce_damu_5: new Chapter(ChapterId.interakce_damu_5, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 2.3",
      },
      data: {
        ambientTrack: TrackId.ambient_damu,
        answerProperty: "interakce_damu_5",
        question: "Co řekneš?",
        options: [
          {
            label: "Počkejte, tak… já to udělám, půjdu s váma.",
            track: TrackId.interakce_2A_3_int5_a,
            value: "a",
          },
          {
            label: "Nechám je odejít",
            value: "b",
          },
        ],
      },
      nextChapter: (state) => {
        switch (state.interakce_damu_5) {
          default:
          case "a":
            return ChapterId.prechod_2A_4;
          case "b":
            return ChapterId.prechod_2A_3_klementinum;
        }
      },
    }),

    prechod_2A_3_ke_klementinu: new Chapter(ChapterId.prechod_2A_3_ke_klementinu, {
      component: MapWalkComponent,
      metadata: {
        title: "Kapitola 2.3",
      },
      data: {
        text: "Julie a Ondra odešli. Nezbývá ti teď nic jiného, než se vrátit za Evou do Klementina. Zjisti si, kudy z mapky. Zrovna sedí na zídce a svačí.",
        mapUrl: "", // TODO: Add map URL
      },
      nextChapter: ChapterId.checkpoint_klementinum_a,
    }),

    checkpoint_klementinum_a: new Chapter(ChapterId.checkpoint_klementinum_a, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 2.3",
      },
      data: {
        question: "Jsi u zídky? Sedni si mezi ty dva stromy.",
      },
      nextChapter: ChapterId.prechod_2A_3_klementinum,
    }),

    prechod_2A_3_klementinum: new Chapter(ChapterId.prechod_2A_3_klementinum, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 2.3",
      },
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_2A_3_klementinum,
        storyDate: "16/11/1989",
      },
      nextChapter: ChapterId.prechod_2B_3,
    }),

    prechod_2A_4: new Chapter(ChapterId.prechod_2A_4, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 2.4",
      },
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_2A_4,
        storyDate: "16/11/1989",
      },
      nextChapter: ChapterId.checkpoint_materialy_2,
    }),

    prechod_2B_2: new Chapter(ChapterId.prechod_2B_2, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 2.2",
      },
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_2B_2,
        storyDate: "16/11/1989",
      },
      nextChapter: ChapterId.checkpoint_klementinum_b,
    }),

    checkpoint_klementinum_b: new Chapter(ChapterId.checkpoint_klementinum_b, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 2.2",
      },
      data: {
        question: "Sedíš na tom správném místě?",
      },
      nextChapter: ChapterId.prechod_2B_3,
    }),

    prechod_2B_3: new Chapter(ChapterId.prechod_2B_3, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 2.3",
      },
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_2B_3,
        storyDate: "16/11/1989",
      },
      nextChapter: ChapterId.interakce_klementinum,
    }),

    interakce_klementinum: new Chapter(ChapterId.interakce_klementinum, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 2.3",
      },
      data: {
        ambientTrack: TrackId.ambient_klementinum,
        question: "Co řekneš Martinovi?",
        answerProperty: "interakce_klementinum",
        options: [
          {
            label: "Přece škola není přednější, než to v jakém systému žiješ!",
            track: TrackId.interakce_2B_3_a,
            value: "a",
          },
          {
            label: "Jo, to je lepší. Politika je složitý téma.",
            track: TrackId.interakce_2B_3_b,
            value: "b",
          },
        ],
      },
      nextChapter: ChapterId.prechod_2B_4,
    }),

    prechod_2B_4: new Chapter(ChapterId.prechod_2B_4, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 2.4",
      },
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_2B_4,
        storyDate: "16/11/1989",
      },
      nextChapter: ChapterId.interakce_betlemske_1,
    }),

    checkpoint_betlemske: new Chapter(ChapterId.checkpoint_betlemske, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 2.4",
      },
      data: {
        question: "Stojíš na Betlémském náměstí?",
      },
      nextChapter: ChapterId.interakce_betlemske_1,
    }),

    interakce_betlemske_1: new Chapter(ChapterId.interakce_betlemske_1, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 2.4",
      },
      data: {
        ambientTrack: TrackId.ambient_betlemske,
        question: "Co si o tom myslíš ty?",
        answerProperty: "interakce_betlemske_1",
        options: [
          {
            label: "Jo, běžte na demonstraci, musíme dát najevo, když nám něco vadí.",
            track: TrackId.interakce_2B_4_int1_a,
            value: "a",
          },
          {
            label: "Radši nikam nechoďte.",
            track: TrackId.interakce_2B_4_int1_b,
            value: "b",
          },
        ],
      },
      nextChapter: ChapterId.prechod_2B_5,
    }),

    prechod_2B_5: new Chapter(ChapterId.prechod_2B_5, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 2.5",
      },
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_2B_5,
        storyDate: "16/11/1989",
      },
      nextChapter: ChapterId.interakce_betlemske_2,
    }),

    interakce_betlemske_2: new Chapter(ChapterId.interakce_betlemske_2, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 2.5",
      },
      data: {
        ambientTrack: TrackId.ambient_betlemske,
        question: "Co si o tom myslíš ty?",
        answerProperty: "interakce_betlemske_2",
        options: [
          {
            label: "Jo běž tam, na tom nic nebezpečnýho není a bude to dobrý.",
            track: TrackId.interakce_2B_5_int2_a,
            value: "a",
          },
          {
            label: "Ne, potřebuješ hlavně dostudovat.",
            track: TrackId.interakce_2B_5_int2_b,
            value: "b",
          },
        ],
      },
      nextChapter: ChapterId.prechod_2B_6,
    }),

    prechod_2B_6: new Chapter(ChapterId.prechod_2B_6, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 2.6",
      },
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_2B_6,
        storyDate: "16/11/1989",
      },
      nextChapter: ChapterId.checkpoint_materialy_2,
    }),

    checkpoint_materialy_2: new Chapter(ChapterId.checkpoint_materialy_2, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 2.6",
      },
      data: {
        question: "Sedíš na lavičce?",
      },
      nextChapter: ChapterId.materialy_2,
    }),

    materialy_2: new Chapter(ChapterId.materialy_2, {
      component: MaterialsComponent,
      metadata: {
        title: "Kapitola 2.6",
      },
      data: {
        track: TrackId.ambient_marianske, // TODO: https://docs.google.com/document/d/1XgQHhSezD6bL1NA4zuAGw63U6Wbe-XiEirFcn7MPBYo/edit?disco=AAABX6hBb-s
        quote: "Prohlédni si materiály:",
        materials: [],
      },
      nextChapter: (state) => {
        switch (state.interakce_konicek) {
          default:
          case "a":
            return ChapterId.prechod_3A_1;
          case "b":
            return ChapterId.prechod_3B_1;
        }
      },
    }),

    prechod_3A_1: new Chapter(ChapterId.prechod_3A_1, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 3.1",
      },
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_3A_1,
        storyDate: "16/11/1989",
      },
      nextChapter: ChapterId.interakce_cigo_A,
    }),

    interakce_cigo_A: new Chapter(ChapterId.interakce_cigo_A, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 3.1",
      },
      data: {
        ambientTrack: TrackId.ambient_betlemske,
        question: "Co odpovíš?",
        answerProperty: "interakce_cigo_A",
        options: [
          {
            label: "Co, tady? Před kaplí, kde kázal Jan Hus?",
            track: TrackId.interakce_3A_1_a,
            value: "a",
          },
          {
            label: "Jasně, na, tady máš sirky/zapík.  (škrtá, zapaluje si cígo)", // TODO: https://docs.google.com/document/d/1XgQHhSezD6bL1NA4zuAGw63U6Wbe-XiEirFcn7MPBYo/edit?disco=AAABX6hBb80
            track: TrackId.interakce_3A_1_b,
            value: "b",
          },
        ],
      },
      nextChapter: ChapterId.prechod_3A_2,
    }),

    prechod_3A_2: new Chapter(ChapterId.prechod_3A_2, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 3.2",
      },
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_3A_2,
        storyDate: "16/11/1989",
      },
      nextChapter: ChapterId.prechod_3_3,
    }),

    prechod_3B_1: new Chapter(ChapterId.prechod_3B_1, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 3.1",
      },
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_3B_1,
        storyDate: "16/11/1989",
      },
      nextChapter: ChapterId.interakce_cigo_B,
    }),

    interakce_cigo_B: new Chapter(ChapterId.interakce_cigo_B, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 3.1",
      },
      data: {
        ambientTrack: TrackId.ambient_betlemske,
        question: "Co odpovíš?",
        answerProperty: "interakce_cigo_B",
        options: [
          {
            label: "Co, tady? Před kaplí, kde kázal Jan Hus?",
            track: TrackId.interakce_3B_1_a,
            value: "a",
          },
          {
            label: "Jasně, na, tady máš sirky/zapík.  (škrtá, zapaluje si cígo)", // TODO: https://docs.google.com/document/d/1XgQHhSezD6bL1NA4zuAGw63U6Wbe-XiEirFcn7MPBYo/edit?disco=AAABX6hBb80
            track: TrackId.interakce_3B_1_b,
            value: "b",
          },
        ],
      },
      nextChapter: ChapterId.prechod_3B_2,
    }),

    prechod_3B_2: new Chapter(ChapterId.prechod_3B_2, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 3.2",
      },
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_3B_2,
        storyDate: "16/11/1989",
      },
      nextChapter: ChapterId.prechod_3_3,
    }),

    prechod_3_3: new Chapter(ChapterId.prechod_3_3, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 3.3",
      },
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_3_3,
        storyDate: "16/11/1989",
      },
      nextChapter: ChapterId.checkpoint_bartolomejska,
    }),

    checkpoint_bartolomejska: new Chapter(ChapterId.checkpoint_bartolomejska, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 3.3",
      },
      data: {
        question: "Stojíš na Bartolomějské ulici?",
      },
      nextChapter: ChapterId.interakce_bartolomejska,
    }),

    interakce_bartolomejska: new Chapter(ChapterId.interakce_bartolomejska, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 3.3",
      },
      data: {
        ambientTrack: TrackId.ambient_bartolomejska,
        question: "DAVID: Co si o tom myslíš?",
        answerProperty: "interakce_bartolomejska",
        options: [
          {
            label: "Jo, udělejte to s SSM. Když to bude oficiální a legální, tak přijde víc lidí.",
            track: TrackId.interakce_3_3_a,
            value: "a",
          },
          {
            label: "Ne, jestli bude demonstrace pod SSM, spíš to lidi odradí.",
            track: TrackId.interakce_3_3_b,
            value: "b",
          },
        ],
      },
      nextChapter: ChapterId.prechod_4_1,
    }),

    prechod_4_1: new Chapter(ChapterId.prechod_4_1, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 4.1",
      },
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_4_1,
        storyDate: "16/11/1989",
      },
      nextChapter: (state) => {
        switch (state.interakce_bartolomejska) {
          default:
          case "a":
            return ChapterId.prechod_4_2A;
          case "b":
            return ChapterId.prechod_4_2B;
        }
      },
    }),

    prechod_4_2A: new Chapter(ChapterId.prechod_4_2A, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 4.2",
      },
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_4_2A,
        storyDate: "16/11/1989",
      },
      nextChapter: ChapterId.interakce_roh_narodni,
    }),

    prechod_4_2B: new Chapter(ChapterId.prechod_4_2B, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 4.2",
      },
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_4_2B,
        storyDate: "16/11/1989",
      },
      nextChapter: ChapterId.interakce_roh_narodni,
    }),

    interakce_roh_narodni: new Chapter(ChapterId.interakce_roh_narodni, {
      component: MaterialsComponent,
      metadata: {
        title: "Kapitola 4.2",
      },
      data: {
        track: TrackId.ambient_roh_narodni,
        quote: "Co ty?",
        materials: [
          // TODO: doplnit fotku
        ],
      },
      nextChapter: ChapterId.prechod_5,
    }),

    prechod_5: new Chapter(ChapterId.prechod_5, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 5",
      },
      data: {
        imageUrl: "assets/images/chapters/ff.png",
        track: TrackId.prechod_5,
        storyDate: "16/11/1989",
      },
      nextChapter: null,
    }),
  },
};
