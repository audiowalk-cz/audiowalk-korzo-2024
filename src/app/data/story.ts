import { BasicStoryState } from "@audiowalk/sdk";
import { Chapter, Story } from "../story/components/story-container/story-container.component";
import { BasicWalkComponent } from "../story/story-components/basic-walk/basic-walk.component";
import { CheckpointComponent } from "../story/story-components/checkpoint/checkpoint.component";
import { InteractionComponent } from "../story/story-components/interaction/interaction.component";
import { MapWalkComponent } from "../story/story-components/map-walk/map-walk.component";
import { MaterialsComponent } from "../story/story-components/materials/materials.component";
import { TrackId } from "./tracks";

/**
 * Seznam všech kapitol v příběhu. Každá kapitola má své jedinečné ID, které je definováno v tomto výčtu.
 * první záznam je to, co se používá v kódu, druhý je to, co se uloží do stavu aplikace. Jsou zpravidla stejné,
 * ale mohou se lišit, pokud by bylo potřeba něco přejmenovat, ale zároveň to nerozbít divákům co již mají
 * ve stavu příběhu uloženou starou hodnotu.
 */
export enum ChapterId {
  "intro_1_1" = "intro_1_1",
  "interakce_ff" = "interakce_ff",
  "prechod_1_2" = "prechod_1_2",
  "checkpoint_lampa" = "checkpoint_lampa",
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
  "materialy_2A" = "materialy_2",
  "checkpoint_materialy_2A" = "checkpoint_materialy_2",
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
  "materialy_2B" = "materialy_2B",
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
  "checkpoint_roh_narodni" = "checkpoint_roh_narodni",
  "prechod_5" = "prechod_5",
  "materialy_konec" = "materialy_konec",
}

/**
 * Všechny interakce v příběhu jsou uloženy v objektu StoryState. Tento objekt vypadá takto:
 */
export interface StoryState extends BasicStoryState<ChapterId> {
  /** Kdy divák zahájil příběh. A také jestli vůbec už zahájil příběh - pokud ne, bude to prázdné. */
  storyStartedAt?: string;

  /**
   * Výsledky jednotlivých interakcí. U interakce je vždy nastavení answerProperty, které určuje kam do stavu se odpověď uloží.
   * V nextChapter se pak zase hdonota odsud použije pro rozhodnutí, kam dál.
   */
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

/**
 * Každá kapitola má nějaké vlastnisti, například titulek (title), který se zobrazí v prehravaci na zamknute obrazovce,
 * nebo odkaz na mapu (directionMapUrl), kde se divák má nacházet.
 * Všechny vlastnosti kapitol vypadají takto:
 */
export interface ChapterMetadata {
  /** Titulek a obrazek se zobrazi v prehravaci na zamknute obrazovce */
  title: string;
  image?: string;

  /** Zobrazit misto v napovede */
  direction?: string;
  directionMapUrl?: string;

  //** zobrazit v seznamu kapitol */
  chapterStart?: boolean;
}

/**
 * Zde je popsaná celá logika příběhu, tedy jaké komponenty (obrazovky) budou použity a co se na nich ukáže.
 * @param initialState - původní stav příběhu na začátku
 * @param chapters - seznam všech kapitol v příběhu a logika přechodu z jedné kapitoly do druhé
 *   component - komponenta, která se má zobrazit
 *   metadata - metadata kapitoly (každá kapitola má stejné, viz ChapterMetadata výše)
 *   data - data, která se mají poslat do komponenty (podle typu komponenty/obrazovky)
 *   nextChapter - logika přechodu do další kapitoly (může být buď přímo ID další kapitoly, nebo funkce, která toto ID vrátí na základě stau příběhu StoryState)
 */
export const story: Story<ChapterId, StoryState, ChapterMetadata> = {
  initialState: {
    currentChapter: ChapterId.intro_1_1,
  },
  chapters: {
    intro_1_1: new Chapter(ChapterId.intro_1_1, {
      component: BasicWalkComponent,
      metadata: {
        title: "1. kapitola",
        image: "assets/images/chapters/hrad.png",
        direction: "Stojíš před Filozofickou fakultou Univerzity Karlovy.",
      },
      data: {
        note: "Zůstaň na místě a poslouchej.",
        imageUrl: "assets/images/chapters/hrad.png",
        track: TrackId.intro_1_1,
        storyDate: "2/10/1989",
      },
      nextChapter: ChapterId.interakce_ff,
    }),

    interakce_ff: new Chapter(ChapterId.interakce_ff, {
      component: InteractionComponent,
      data: {
        ambientTrack: TrackId.ambient_FF,
        question: "Tak co, vyrazíš s Evou?",
        answerProperty: "interakce_FF",
        options: [
          {
            label: "Jasně, těším se!",
            value: "a",
          },
          {
            label: "No tak jo.",
            value: "a",
          },
        ],
      },
      metadata: {
        title: "Kapitola 1.1",
        direction: "Stojíš před Filozofickou fakultou Univerzity Karlovy.",
      },
      nextChapter: ChapterId.prechod_1_2,
    }),

    prechod_1_2: new Chapter(ChapterId.prechod_1_2, {
      component: BasicWalkComponent,
      data: {
        note: "Jdeš do parku u&nbsp;Staroměstské radnice.",
        imageUrl: "assets/images/chapters/staromak_lampa.png",
        track: TrackId.prechod_1_2,
        storyDate: "2/10/1989",
      },
      metadata: {
        title: "Kapitola 1.2",
        direction:
          "Dojdi k lampě v&nbsp;parku u&nbsp;Staroměstské radnice.\n\nTrasa vede od&nbsp;Filozofické fakulty Univerzity Karlovy ulicí Kaprova a&nbsp;pokračuje na rohu Maiselovy ulice směrem na Staroměstské náměstí.",
      },
      nextChapter: ChapterId.checkpoint_lampa,
    }),

    checkpoint_lampa: new Chapter(ChapterId.checkpoint_lampa, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 1.1",
        direction: "Stojíš u pouliční lampy uprostřed parku u Staroměstského náměstí.",
      },
      data: {
        headerText: "2/10/1989",
        question: "Stojíš u pouliční lampy uprostřed parku u Staroměstského náměstí?",
        ambientTrack: TrackId.ambient_park,
      },
      nextChapter: ChapterId.prechod_1_3,
    }),

    prechod_1_3: new Chapter(ChapterId.prechod_1_3, {
      component: BasicWalkComponent,
      data: {
        note: "Zůstaň na místě a poslouchej.",
        imageUrl: "assets/images/chapters/staromak_lampa.png",
        track: TrackId.prechod_1_3,
        storyDate: "2/10/1989",
      },
      metadata: {
        title: "Kapitola 1.3",
        direction: "Stojíš u pouliční lampy uprostřed parku u Staroměstského náměstí.",
      },
      nextChapter: ChapterId.interakce_park,
    }),

    interakce_park: new Chapter(ChapterId.interakce_park, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 1.4",
        direction: "Stojíš u pouliční lampy uprostřed parku u Staroměstského náměstí.",
      },
      data: {
        ambientTrack: TrackId.ambient_park,
        question: "Jestli chceš, můžeš na to zareagovat.",
        answerProperty: "interakce_park",
        options: [
          {
            label: "Takže se to snažíte reformovat zevnitř, postupně, to dává smysl.",
            track: TrackId.interakce_1_3_a,
            value: "a",
          },
          {
            label: "Taky mi nepřijde dobrý spolupracovat se svazákama!",
            track: TrackId.interakce_1_3_b,
            value: "b",
          },
          {
            label: "…nechci reagovat…",
            track: TrackId.interakce_1_3_c,
            value: "c",
            italic: true,
          },
        ],
      },
      nextChapter: ChapterId.prechod_1_4,
    }),

    prechod_1_4: new Chapter(ChapterId.prechod_1_4, {
      component: BasicWalkComponent,
      data: {
        note: "Jdeš ke Koníčkovi.",
        imageUrl: "assets/images/chapters/u_konicka.png",
        track: TrackId.prechod_1_4,
        storyDate: "2/10/1989",
      },
      metadata: {
        title: "Kapitola 1.4",
        direction: "Dojdi kolem radnice k restauraci White Horse Prague.",
      },
      nextChapter: ChapterId.checkpoint_konicek,
    }),

    checkpoint_konicek: new Chapter(ChapterId.checkpoint_konicek, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 1.4",
        direction: "Máš být před vchodem do zahrádky restaurace White Horse. Nachází se na rohu Železné ulice.",
      },
      data: {
        headerText: "2/10/1989",
        question: "Jsi před vchodem do zahrádky restaurace White Horse? Nachází se na rohu Železné ulice.",
        ambientTrack: TrackId.ambient_konicek,
      },
      nextChapter: ChapterId.prechod_1_5,
    }),

    prechod_1_5: new Chapter(ChapterId.prechod_1_5, {
      component: BasicWalkComponent,
      data: {
        note: "Zůstaň na místě a poslouchej.",
        imageUrl: "assets/images/chapters/u_konicka.png",
        track: TrackId.prechod_1_5,
        storyDate: "2/10/1989",
      },
      metadata: {
        title: "Kapitola 1.5",
        direction: "Máš být před vchodem do zahrádky restaurace White Horse. Nachází se na rohu Železné ulice.",
      },
      nextChapter: ChapterId.interakce_konicek,
    }),

    interakce_konicek: new Chapter(ChapterId.interakce_konicek, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 1.5",
        direction: "Máš být před vchodem do zahrádky restaurace White Horse. Nachází se na rohu Železné ulice.",
      },
      data: {
        ambientTrack: TrackId.ambient_konicek,
        question: "S kým souhlasíš?",
        answerProperty: "interakce_konicek",
        options: [
          {
            label: "S Davidem, kompromisy se nedělají!",
            track: TrackId.interakce_1_5_a,
            value: "a",
          },
          {
            label: "S Terezou, akce je třeba dělat bezpečně.",
            track: TrackId.interakce_1_5_b,
            value: "b",
          },
        ],
      },
      nextChapter: (state) => {
        switch (state.interakce_konicek) {
          case "b":
            return ChapterId.prechod_1_6B;
          default:
          case "a":
            return ChapterId.prechod_1_6A;
        }
      },
    }),

    prechod_1_6A: new Chapter(ChapterId.prechod_1_6A, {
      component: BasicWalkComponent,
      data: {
        note: "Jdeš s Davidem noční Prahou směrem na&nbsp;Mariánské náměstí.",
        imageUrl: "assets/images/chapters/marianske.png",
        track: TrackId.prechod_1_6A,
        storyDate: "2/10/1989",
      },
      metadata: {
        title: "Kapitola 1.6",
        direction:
          "Jdi na Mariánské náměstí.\n\nTrasa vede od restaurace White Horse, kolem orloje na Malé náměstí s&nbsp;kašnou uprostřed a&nbsp;pak doleva ulicí Linhartská.",
      },
      nextChapter: ChapterId.materialy_1A,
    }),

    prechod_1_6B: new Chapter(ChapterId.prechod_1_6B, {
      component: BasicWalkComponent,
      data: {
        note: "Jdeš s Terezou noční Prahou směrem na&nbsp;Mariánské náměstí.",
        imageUrl: "assets/images/chapters/marianske.png",
        track: TrackId.prechod_1_6B,
        storyDate: "2/10/1989",
      },
      metadata: {
        title: "Kapitola 1.6",
        direction:
          "Jdi na Mariánské náměstí.\n\nTrasa vede od restaurace White Horse, kolem orloje na Malé náměstí s&nbsp;kašnou uprostřed a&nbsp;pak doleva ulicí Linhartská.",
      },
      nextChapter: ChapterId.materialy_1B,
    }),

    materialy_1A: new Chapter(ChapterId.materialy_1A, {
      component: MaterialsComponent,
      data: {
        quote:
          "David ti podal časopisy.\n\nDojdi doprostřed Mariánského náměstí, bývají tam stolky a židle. Pokud si chceš materiály v klidu prohlédnout, sedni si tam.",
        materials: [],
        ambientTrack: TrackId.ambient_materialy_1,
      },
      metadata: {
        title: "Kapitola 1.6",
        direction: "Dojdi doprostřed Mariánského náměstí, bývají tam stolky a židle.",
      },
      nextChapter: ChapterId.checkpoint_marianske,
    }),

    materialy_1B: new Chapter(ChapterId.materialy_1B, {
      component: MaterialsComponent,
      data: {
        quote:
          "Tereza ti podala časopisy.\n\nDojdi doprostřed Mariánského náměstí, bývají tam stolky a židle. Pokud si chceš materiály v klidu prohlédnout, sedni si tam.",
        materials: [],
        ambientTrack: TrackId.ambient_materialy_1,
      },
      metadata: {
        title: "Kapitola 1.6",
        direction: "Dojdi doprostřed Mariánského náměstí, bývají tam stolky a židle.",
      },
      nextChapter: ChapterId.checkpoint_marianske,
    }),

    checkpoint_marianske: new Chapter(ChapterId.checkpoint_marianske, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 2.1",
        direction: "Máš stát uprostřed Mariánského náměstí.",
      },
      data: {
        headerText: "2/10/1989",
        question: "Jsi uprostřed Mariánského náměstí?",
        ambientTrack: TrackId.ambient_marianske,
      },
      nextChapter: ChapterId.prechod_2_1,
    }),

    prechod_2_1: new Chapter(ChapterId.prechod_2_1, {
      component: BasicWalkComponent,
      data: {
        note: "Zůstaň na místě a poslouchej.",
        imageUrl: "assets/images/chapters/marianske.png",
        track: TrackId.prechod_2_1,
        storyDate: "18/10/1989",
      },
      metadata: {
        title: "Kapitola 2.1",
        direction: "Máš stát uprostřed Mariánského náměstí.",
      },
      nextChapter: ChapterId.interakce_marianske,
    }),

    interakce_marianske: new Chapter(ChapterId.interakce_marianske, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 2.1",
        direction: "Máš stát uprostřed Mariánského náměstí.",
      },
      data: {
        ambientTrack: TrackId.ambient_marianske,
        question: "Co odpovíš Evě?",
        answerProperty: "interakce_marianske",
        options: [
          {
            label: "Jdu pro letáky!",
            track: TrackId.interakce_2_1_a,
            value: "a",
          },
          {
            label: "Hmm, tak já s tebou radši půjdu do Klementina. Zajímá mě, jak to tam vypadá a koho potkáme.",
            track: TrackId.interakce_2_1_b,
            value: "b",
          },
        ],
      },
      nextChapter: (state) => {
        switch (state.interakce_marianske) {
          case "b":
            return ChapterId.prechod_2B_2;
          default:
          case "a":
            return ChapterId.prechod_2A_2;
        }
      },
    }),

    prechod_2A_2: new Chapter(ChapterId.prechod_2A_2, {
      component: BasicWalkComponent,
      data: {
        note: "Jdeš pro letáky.\nPřed DAMU počkej na Julii.",
        imageUrl: "assets/images/chapters/damu.png",
        track: TrackId.prechod_2A_2,
        storyDate: "18/10/1989",
      },
      metadata: {
        title: "Kapitola 2.2",
        direction:
          "Dojdi k DAMU.\n\nTrasa vede od Mariánského náměstí ulicí Husova, následně první doprava do ulice Karlova. DAMU uvidí na levé straně.",
      },
      nextChapter: ChapterId.checkpoint_damu,
    }),

    checkpoint_damu: new Chapter(ChapterId.checkpoint_damu, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 2.2",
      },
      data: {
        headerText: "10/10/1989",
        question: "Stojíš před DAMU?",
        ambientTrack: TrackId.ambient_damu,
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
        question: "Před DAMU vidíš stát Julii a Ondru, kouří. Co uděláš ty?",
        answerProperty: "interakce_damu_1",
        options: [
          {
            label: "Oslovím je s tím, že jsme se viděli u Koníčka.",
            track: TrackId.interakce_2A_2_int1_a,
            value: "a",
            italic: true,
          },
          {
            label: "Dál zmateně koukám.",
            track: TrackId.interakce_2A_2_int1_b,
            value: "b",
            italic: true,
          },
        ],
      },
      nextChapter: ChapterId.interakce_damu_2,
    }),

    interakce_damu_2: new Chapter(ChapterId.interakce_damu_2, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 2.2",
        direction: "Stojíš před DAMU.",
      },
      data: {
        ambientTrack: TrackId.ambient_damu,
        question: "Jak vysvětlíš, že jsi tu ty, a ne Eva?",
        answerProperty: "interakce_damu_2",
        options: [
          {
            label: "Eva říkala, že se s tebou domluvila na něčem ohledně nějakých letáků. Ale nakonec nemá čas.",
            value: "a",
          },
          {
            label:
              "Eva říkala, že se s tebou domluvila na něčem ohledně nějakých letáků. Ale nakonec se jí do toho nechce.",
            value: "b",
          },
        ],
      },
      nextChapter: ChapterId.prechod_2A_3,
    }),

    prechod_2A_3: new Chapter(ChapterId.prechod_2A_3, {
      component: BasicWalkComponent,
      data: {
        note: "Zůstaň na místě a poslouchej.",
        imageUrl: "assets/images/chapters/damu.png",
        track: TrackId.prechod_2A_3,
        storyDate: "18/10/1989",
      },
      metadata: {
        title: "Kapitola 2.3",
        direction: "Máš stát před DAMU.",
      },
      nextChapter: ChapterId.interakce_damu_3,
    }),

    interakce_damu_3: new Chapter(ChapterId.interakce_damu_3, {
      component: InteractionComponent,
      metadata: {
        title: "Kapitola 2.3",
        direction: "Máš stát před DAMU.",
      },
      data: {
        ambientTrack: TrackId.ambient_damu,
        question: "Co ty na to?",
        answerProperty: "interakce_damu_3",
        options: [
          {
            label: "To je dost práce… Fakt budu muset oběhnout všechno?",
            track: TrackId.interakce_2A_3_int3_a_b,
            value: "a",
          },
          {
            label: "Počkej, a když si mě někdo všimne, nebude z toho problém?",
            track: TrackId.interakce_2A_3_int3_a_b,
            value: "b",
          },
          {
            label: "Jo, jasný, jdu!",
            track: TrackId.interakce_2A_3_parada,
            value: "c",
          },
        ],
      },
      nextChapter: (state) => {
        switch (state.interakce_damu_3) {
          case "a":
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
        question: "Myslíš, že to zvládneš?",
        answerProperty: "interakce_damu_4",
        options: [
          {
            label: "Jo, jasný, pohoda!",
            track: TrackId.interakce_2A_3_parada,
            value: "a",
          },
          {
            label: "Hele já se na to asi úplně necítím, promiň…",
            track: TrackId.interakce_2A_3_int4_b,
            value: "b",
          },
        ],
      },
      nextChapter: (state) => {
        switch (state.interakce_damu_4) {
          case "b":
            return ChapterId.interakce_damu_5;
          default:
          case "a":
            return ChapterId.prechod_2A_4;
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
        question: "Opravdu je necháš odejít?",
        options: [
          {
            label: "Ještě je zastavím a řeknu, že jdu s nima.",
            track: TrackId.interakce_2A_3_int5_a,
            value: "a",
            italic: true,
          },
          {
            label: "Nechám je odejít.",
            value: "b",
            italic: true,
          },
        ],
      },
      nextChapter: (state) => {
        switch (state.interakce_damu_5) {
          case "b":
            return ChapterId.prechod_2A_3_ke_klementinu;
          default:
          case "a":
            return ChapterId.prechod_2A_4;
        }
      },
    }),

    prechod_2A_3_ke_klementinu: new Chapter(ChapterId.prechod_2A_3_ke_klementinu, {
      component: MapWalkComponent,
      metadata: {
        title: "Kapitola 2.3",
      },
      data: {
        text: "Julie a Ondra odešli. Nezbývá ti teď nic jiného, než se vrátit za Evou do Klementina. Kudy máš jít, si zjisti z mapy.",
        confirmationText: "Dobře, jdu do Klementina",
        mapUrl: "AAA", // TODO: Add map URL
      },
      nextChapter: ChapterId.checkpoint_klementinum_a,
    }),

    checkpoint_klementinum_a: new Chapter(ChapterId.checkpoint_klementinum_a, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 2.3",
      },
      data: {
        headerText: "10/10/1989",
        question: "Už jsi na místě? Eva sedí na rohu na zídce před stromem. Jdi k ní.",
        ambientTrack: TrackId.ambient_klementinum,
        mapUrl: "AAA", // TODO: Add map URL
        confirmationText: "Stojím u zídky",
      },
      nextChapter: ChapterId.prechod_2A_3_klementinum,
    }),

    prechod_2A_3_klementinum: new Chapter(ChapterId.prechod_2A_3_klementinum, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 2.3",
        direction: "Máš stát u zídky v areálu Klementina.",
      },
      data: {
        note: "Zůstaň na místě a poslouchej.",
        imageUrl: "assets/images/chapters/klementinum.png",
        track: TrackId.prechod_2A_3_klementinum,
        storyDate: "18/10/1989",
      },
      nextChapter: ChapterId.prechod_2B_3,
    }),
    prechod_2A_4: new Chapter(ChapterId.prechod_2A_4, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 2.4",
        direction:
          "Dojdi před Betlémskou kapli.\n\nTrasa vede Karlovou ulicí směrem ke Karlovu mostu. U&nbsp;stromu odboč doleva do Liliové ulice a&nbsp;projdi jí až na konec. Na Betlémském náměstí se drž vlevo, než se ocitneš před vchodem do Betlémské kaple.",
      },
      data: {
        note: "Jdete směrem na Betlémské náměstí.",
        imageUrl: "assets/images/chapters/betlemska_kaple.png",
        track: TrackId.prechod_2A_4,
        storyDate: "18/10/1989",
      },
      nextChapter: ChapterId.materialy_2A,
    }),

    materialy_2: new Chapter(ChapterId.materialy_2A, {
      component: MaterialsComponent,
      metadata: {
        title: "Kapitola 2.6",
      },
      data: {
        materials: [], // TODO: add letak
        ambientTrack: TrackId.ambient_betlemske,
      },
      nextChapter: ChapterId.checkpoint_materialy_2A,
    }),

    checkpoint_materialy_2: new Chapter(ChapterId.checkpoint_materialy_2A, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 2.6",
      },
      data: {
        headerText: "18/10/1989",
        question: "Jsi na Betlémském náměstí kousek od vchodu do Betlémské kaple? Je tu strom a okolo něj lavička.",
        ambientTrack: TrackId.ambient_betlemske,
      },
      nextChapter: (state) => {
        switch (state.interakce_konicek) {
          case "b":
            return ChapterId.prechod_3B_1;
          default:
          case "a":
            return ChapterId.prechod_3A_1;
        }
      },
    }),

    prechod_2B_2: new Chapter(ChapterId.prechod_2B_2, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 2.2",
        direction:
          "Dojdi do Klementina.\n\nPřejdi dlážděnou silnici a vejdi velkou branou do areálu Klementina. Za průchodem odboč doleva. Až projdeš dalším průchodem, napravo uvidíš dva stromy. Zastav se na rohu u druhého stromu.",
      },
      data: {
        note: "Jdeš do Klementina.",
        imageUrl: "assets/images/chapters/klementinum.png",
        track: TrackId.prechod_2B_2,
        storyDate: "18/10/1989",
      },
      nextChapter: ChapterId.checkpoint_klementinum_b,
    }),

    checkpoint_klementinum_b: new Chapter(ChapterId.checkpoint_klementinum_b, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 2.2",
      },
      data: {
        headerText: "18/10/1989",
        question: "Sedíš na zídce u stromu?",
        ambientTrack: TrackId.ambient_klementinum,
      },
      nextChapter: ChapterId.prechod_2B_3,
    }),

    prechod_2B_3: new Chapter(ChapterId.prechod_2B_3, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 2.3",
        direction: "Máš sedět na zídce u stromu v areálu Klementina.",
      },
      data: {
        note: "Zůstaň na místě a poslouchej.",
        imageUrl: "assets/images/chapters/klementinum.png",
        track: TrackId.prechod_2B_3,
        storyDate: "18/10/1989",
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
        direction:
          "Dojdi na Betlémské náměstí.\n\nTrasa vede od Klementina průchodem do Karlovy ulice, pak doprava směrem ke Karlovu mostu a před červeným domem doleva do Liliové ulice, kterou projdeš až na konec na Betlémské náměstí. Na Betlémském náměstí se drž vlevo, než se ocitneš před vchodem do Betlémské kaple.",
      },
      data: {
        note: "Jdeš s Evou a Martinem na Betlémské náměstí.",
        imageUrl: "assets/images/chapters/betlemska_kaple.png",
        track: TrackId.prechod_2B_4,
        storyDate: "18/10/1989",
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
        question: "Co jim poradíš?",
        answerProperty: "interakce_betlemske_1",
        options: [
          {
            label: "Ano, běžte na demonstraci, musíme dát najevo, když nám něco vadí!",
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
        direction: "Máš stát před Betlémskou kaplí.",
      },
      data: {
        note: "Zůstaň na místě a poslouchej.",
        imageUrl: "assets/images/chapters/betlemska_kaple.png",
        track: TrackId.prechod_2B_5,
        storyDate: "18/10/1989",
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
        question: "Měl by Martin jít na promítání na americké ambasádě?",
        answerProperty: "interakce_betlemske_2",
        options: [
          {
            label: "Jasně, běž. Na tom nic nebezpečnýho není a třeba tam budou dávat skvělej film!",
            track: TrackId.interakce_2B_5_int2_a,
            value: "a",
          },
          {
            label: "Ne, Martine, nechoď. Potřebuješ hlavně v klidu dostudovat.",
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
        direction: "Máš stát před Betlémskou kaplí.",
      },
      data: {
        note: "Zůstaň na místě a poslouchej.",
        imageUrl: "assets/images/chapters/betlemska_kaple.png",
        track: TrackId.prechod_2B_6,
        storyDate: "18/10/1989",
      },
      nextChapter: ChapterId.checkpoint_betlemske,
    }),

    checkpoint_betlemske: new Chapter(ChapterId.checkpoint_betlemske, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 2.4",
      },
      data: {
        headerText: "18/10/1989",
        question: "Jsi na Betlémském náměstí kousek od vchodu do Betlémské kaple? Je tu strom a okolo něj lavička.",
        ambientTrack: TrackId.ambient_betlemske,
      },
      nextChapter: ChapterId.materialy_2B,
    }),

    materialy_2B: new Chapter(ChapterId.materialy_2B, {
      component: MaterialsComponent,
      metadata: {
        title: "Kapitola 2.6",
      },
      data: {
        quote:
          "Martin s Evou odešli na oběd. Ty zůstáváš u lavičky před Betlémskou kaplí. Všímáš si, že pod ní leží tento leták:",
        materials: [], // TODO: add letak
        ambientTrack: TrackId.ambient_betlemske,
      },
      nextChapter: (state) => {
        switch (state.interakce_konicek) {
          case "b":
            return ChapterId.prechod_3B_1;
          default:
          case "a":
            return ChapterId.prechod_3A_1;
        }
      },
    }),

    prechod_3A_1: new Chapter(ChapterId.prechod_3A_1, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 3.1",
        direction: "Máš stát před Betlémskou kaplí.",
      },
      data: {
        note: "Zůstaň na místě a poslouchej.",
        imageUrl: "assets/images/chapters/betlemska_kaple.png",
        track: TrackId.prechod_3A_1,
        storyDate: "2/11/1989",
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
        question: "Co odpovíš Davidovi?",
        answerProperty: "interakce_cigo_A",
        options: [
          {
            label: "Co, tady? Před kaplí, kde kázal Jan Hus?",
            track: TrackId.interakce_3A_1_a,
            value: "a",
          },
          {
            label: "Jasně, na, tady máš zapík.",
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
        direction:
          "Dojdi do Bartolomějské ulice.\n\nTrasa vede od Betlémské kaple Konviktskou, pak hned doleva úzkou uličkou Průchodní. Na jejím konci zahni doprava do Bartolomějské a jdi dál.",
      },
      data: {
        note: "Jdete do Bartolomějské.",
        imageUrl: "assets/images/chapters/kachlikarna.png",
        track: TrackId.prechod_3A_2,
        storyDate: "2/11/1989",
      },
      nextChapter: ChapterId.prechod_3_3,
    }),

    prechod_3B_1: new Chapter(ChapterId.prechod_3B_1, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 3.1",
        direction: "Máš stát před Betlémskou kaplí.",
      },
      data: {
        note: "Zůstaň na místě a poslouchej.",
        imageUrl: "assets/images/chapters/betlemska_kaple.png",
        track: TrackId.prechod_3B_1,
        storyDate: "2/11/1989",
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
        question: "Co odpovíš Tereze?",
        answerProperty: "interakce_cigo_B",
        options: [
          {
            label: "Co, tady? Před kaplí, kde kázal Jan Hus?",
            track: TrackId.interakce_3B_1_a,
            value: "a",
          },
          {
            label: "Jasně, na, tady máš zapík.",
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
        direction:
          "Dojdi do Bartolomějské ulice.\n\nTrasa vede od Betlémské kaple Konviktskou, pak hned doleva úzkou uličkou Průchodní. Na jejím konci zahni doprava do Bartolomějské a jdi dál.",
      },
      data: {
        note: "Jdete do Bartolomějské.",
        imageUrl: "assets/images/chapters/kachlikarna.png",
        track: TrackId.prechod_3B_2,
        storyDate: "2/11/1989",
      },
      nextChapter: ChapterId.prechod_3_3,
    }),

    prechod_3_3: new Chapter(ChapterId.prechod_3_3, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 3.3",
        direction:
          "Dojdi na roh Bartolomějské s ulicí Karoliny Světlé.\n\nJdi Bartolomějsou ulicí směrem na západ (k řece) až dojdeš na křižovatku s ulicí Karoliny Světlé.",
      },
      data: {
        note: "Jdete dál Bartolomějskou.",
        imageUrl: "assets/images/chapters/kachlikarna.png",
        track: TrackId.prechod_3_3,
        storyDate: "2/11/1989",
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
        question: "Co si o tom myslíš ty?",
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
      nextChapter: ChapterId.checkpoint_bartolomejska,
    }),

    checkpoint_bartolomejska: new Chapter(ChapterId.checkpoint_bartolomejska, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 3.3",
      },
      data: {
        headerText: "2/11/1989",
        question: "Stojíš na rohu ulic Bartolomějská a Karoliny Světlé?",
        ambientTrack: TrackId.ambient_bartolomejska,
      },
      nextChapter: ChapterId.prechod_4_1,
    }),

    prechod_4_1: new Chapter(ChapterId.prechod_4_1, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 4.1",
        direction: "Máš jít směrem na Národní třídu.\n\nDojdi ulicí Karoliny Světlé na roh s ulicí Národní třída.",
      },
      data: {
        note: "Následuj Davida a Terezu.",
        imageUrl: "assets/images/chapters/narodni.png",
        track: TrackId.prechod_4_1,
        storyDate: "17/11/1989",
      },
      nextChapter: (state) => {
        switch (state.interakce_bartolomejska) {
          case "b":
            return ChapterId.prechod_4_2B;
          default:
          case "a":
            return ChapterId.prechod_4_2A;
        }
      },
    }),

    prechod_4_2A: new Chapter(ChapterId.prechod_4_2A, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 4.2",
        direction: "Máš jít směrem na Národní třídu.\n\nDojdi ulicí Karoliny Světlé na roh s ulicí Národní třída.",
      },
      data: {
        note: "Následuj Davida a Terezu.",
        imageUrl: "assets/images/chapters/narodni.png",
        track: TrackId.prechod_4_2A,
        storyDate: "17/11/1989",
      },
      nextChapter: ChapterId.interakce_roh_narodni,
    }),

    prechod_4_2B: new Chapter(ChapterId.prechod_4_2B, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 4.2",
        direction: "Máš jít směrem na Národní třídu.\n\nDojdi ulicí Karoliny Světlé na roh s ulicí Národní třída.",
      },
      data: {
        note: "Následuj Davida a Terezu.",
        imageUrl: "assets/images/chapters/narodni.png",
        track: TrackId.prechod_4_2B,
        storyDate: "17/11/1989",
      },
      nextChapter: ChapterId.interakce_roh_narodni,
    }),

    interakce_roh_narodni: new Chapter(ChapterId.interakce_roh_narodni, {
      component: MaterialsComponent,
      metadata: {
        title: "Kapitola 4.2",
      },
      data: {
        quote: "Co ty?",
        materials: [
          // TODO: doplnit fotku
        ],
        ambientTrack: TrackId.ambient_roh_narodni,
      },
      nextChapter: ChapterId.checkpoint_roh_narodni,
    }),

    checkpoint_roh_narodni: new Chapter(ChapterId.checkpoint_roh_narodni, {
      component: CheckpointComponent,
      metadata: {
        title: "Kapitola 2.4",
      },
      data: {
        headerText: "18/10/1989",
        question: "Máš stát na rohu ulic Karoliny Světlé a Národní. Přejdi na druhou stranu Národní třídy k domu Dunaj. Tam se vydej po Národní doleva a dojdi až k památníku 17. listopadu.",
        confirmationText: "Ok",
        ambientTrack: TrackId.ambient_betlemske,
      },
      nextChapter: ChapterId.prechod_5,
    }),

    prechod_5: new Chapter(ChapterId.prechod_5, {
      component: BasicWalkComponent,
      metadata: {
        title: "Kapitola 5",
        direction:
          "Dojdi po Národní třídě až k pamětní desce 17.&nbsp;listopadu.\n\nNachází se kousek od rohu ulic Mikulandská a Národní.",
      },
      data: {
        note: "Dojdi po Národní třídě až k pamětní desce 17.&nbsp;listopadu.",
        imageUrl: "assets/images/chapters/narodni_dav.png",
        track: TrackId.prechod_5,
        storyDate: "17/11/1989",
      },
      nextChapter: ChapterId.materialy_konec,
    }),

    materialy_konec: new Chapter(ChapterId.materialy_konec, {
      component: MaterialsComponent,
      metadata: {
        title: "Konec",
      },
      data: {
        materials: [
          // TODO: doplnit dva letaky
        ],
      },
      nextChapter: null,
    }),
  },
};
