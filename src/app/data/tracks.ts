import { TrackDefinition } from "../shared/services/media.service";

export enum TrackId {
  "tutorial_test" = "tutorial_test",
  "intro_1_1" = "intro_1_1",
  "ambient_FF" = "ambient_FF",
  "prechod_1_2" = "prechod_1_2",
  "prechod_1_3" = "prechod_1_3",
  "ambient_park" = "ambient_park",
  "interakce_1_3_a" = "interakce_1_3_a",
  "interakce_1_3_b" = "interakce_1_3_b",
  "interakce_1_3_c" = "interakce_1_3_c",
  "prechod_1_4" = "prechod_1_4",
  "prechod_1_5" = "prechod_1_5",
  "ambient_konicek" = "ambient_konicek",
  "interakce_1_5_a" = "interakce_1_5_a",
  "interakce_1_5_b" = "interakce_1_5_b",
  "prechod_1_6A" = "prechod_1_6A",
  "prechod_1_6B" = "prechod_1_6B",
  "ambient_materialy" = "ambient_materialy",
  "prechod_2_1" = "prechod_2_1",
  "ambient_marianske" = "ambient_marianske",
  "interakce_2_1_a" = "interakce_2_1_a",
  "interakce_2_1_b" = "interakce_2_1_b",
  "prechod_2A_2" = "prechod_2A_2",
  "ambient_damu" = "ambient_damu",
  "interakce_2A_2_int1_a" = "interakce_2A_2_int1_a",
  "interakce_2A_2_int1_b" = "interakce_2A_2_int1_b",
  "prechod_2A_3" = "prechod_2A_3",
  "interakce_2A_3_parada" = "interakce_2A_3_parada",
  "interakce_2A_3_int3_a_b" = "interakce_2A_3_int3_a_b",
  "interakce_2A_3_int4_b" = "interakce_2A_3_int4_b",
  "interakce_2A_3_int5_a" = "interakce_2A_3_int5_a",
  "prechod_2A_3_klementinum" = "prechod_2A_3_klementinum",
  "prechod_2A_4" = "prechod_2A_4",
  "prechod_2B_2" = "prechod_2B_2",
  "prechod_2B_3" = "prechod_2B_3",
  "ambient_klementinum" = "ambient_klementinum",
  "interakce_2B_3_a" = "interakce_2B_3_a",
  "interakce_2B_3_b" = "interakce_2B_3_b",
  "prechod_2B_4" = "prechod_2B_4",
  "ambient_betlemske" = "ambient_betlemske",
  "interakce_2B_4_int1_a" = "interakce_2B_4_int1_a",
  "interakce_2B_4_int1_b" = "interakce_2B_4_int1_b",
  "prechod_2B_5" = "prechod_2B_5",
  "interakce_2B_5_int2_a" = "interakce_2B_5_int2_a",
  "interakce_2B_5_int2_b" = "interakce_2B_5_int2_b",
  "prechod_2B_6" = "prechod_2B_6",
  "prechod_3A_1" = "prechod_3A_1",
  "interakce_3A_1_a" = "interakce_3A_1_a",
  "interakce_3A_1_b" = "interakce_3A_1_b",
  "prechod_3A_2" = "prechod_3A_2",
  "prechod_3B_1" = "prechod_3B_1",
  "interakce_3B_1_a" = "interakce_3B_1_a",
  "interakce_3B_1_b" = "interakce_3B_1_b",
  "prechod_3B_2" = "prechod_3B_2",
  "prechod_3_3" = "prechod_3_3",
  "ambient_bartolomejska" = "ambient_bartolomejska",
  "interakce_3_3_a" = "interakce_3_3_a",
  "interakce_3_3_b" = "interakce_3_3_b",
  "prechod_4_1" = "prechod_4_1",
  "prechod_4_2A" = "prechod_4_2A",
  "prechod_4_2B" = "prechod_4_2B",
  "ambient_roh_narodni" = "ambient_roh_narodni",
  "prechod_5" = "prechod_5",
}

export const Tracks: { [key in TrackId]: { id: key } & TrackDefinition } = {
  tutorial_test: {
    id: TrackId["tutorial_test"],
    url: "assets/audio/test.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  intro_1_1: {
    id: TrackId["intro_1_1"],
    url: "assets/audio/intro_1_1.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  ambient_FF: {
    id: TrackId["ambient_FF"],
    url: "assets/audio/ambient_FF.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_1_2: {
    id: TrackId["prechod_1_2"],
    url: "assets/audio/prechod_1_2.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_1_3: {
    id: TrackId["prechod_1_3"],
    url: "assets/audio/prechod_1_3.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  ambient_park: {
    id: TrackId["ambient_park"],
    url: "assets/audio/ambient_park.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_1_3_a: {
    id: TrackId["interakce_1_3_a"],
    url: "assets/audio/interakce_1_3_a.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_1_3_b: {
    id: TrackId["interakce_1_3_b"],
    url: "assets/audio/interakce_1_3_b.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_1_3_c: {
    id: TrackId["interakce_1_3_c"],
    url: "assets/audio/interakce_1_3_c.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_1_4: {
    id: TrackId["prechod_1_4"],
    url: "assets/audio/prechod_1_4.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_1_5: {
    id: TrackId["prechod_1_5"],
    url: "assets/audio/prechod_1_5.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  ambient_konicek: {
    id: TrackId["ambient_konicek"],
    url: "assets/audio/ambient_konicek.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_1_5_a: {
    id: TrackId["interakce_1_5_a"],
    url: "assets/audio/interakce_1_5_a.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_1_5_b: {
    id: TrackId["interakce_1_5_b"],
    url: "assets/audio/interakce_1_5_b.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_1_6A: {
    id: TrackId["prechod_1_6A"],
    url: "assets/audio/prechod_1_6A.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_1_6B: {
    id: TrackId["prechod_1_6B"],
    url: "assets/audio/prechod_1_6B.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  ambient_materialy: {
    id: TrackId["ambient_materialy"],
    url: "assets/audio/ambient_materialy.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_2_1: {
    id: TrackId["prechod_2_1"],
    url: "assets/audio/prechod_2_1.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  ambient_marianske: {
    id: TrackId["ambient_marianske"],
    url: "assets/audio/ambient_marianske.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_2_1_a: {
    id: TrackId["interakce_2_1_a"],
    url: "assets/audio/interakce_2_1_a.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_2_1_b: {
    id: TrackId["interakce_2_1_b"],
    url: "assets/audio/interakce_2_1_b.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_2A_2: {
    id: TrackId["prechod_2A_2"],
    url: "assets/audio/prechod_2A_2.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  ambient_damu: {
    id: TrackId["ambient_damu"],
    url: "assets/audio/ambient_damu.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_2A_2_int1_a: {
    id: TrackId["interakce_2A_2_int1_a"],
    url: "assets/audio/prechod_2A_2_int1_a.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_2A_2_int1_b: {
    id: TrackId["interakce_2A_2_int1_b"],
    url: "assets/audio/prechod_2A_2_int1_b.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_2A_3: {
    id: TrackId["prechod_2A_3"],
    url: "assets/audio/prechod_2A_3.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_2A_3_parada: {
    id: TrackId["interakce_2A_3_parada"],
    url: "assets/audio/interakce_2A_3_parada.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_2A_3_int3_a_b: {
    id: TrackId["interakce_2A_3_int3_a_b"],
    url: "assets/audio/prechod_2A_3_int3_a+b.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_2A_3_int4_b: {
    id: TrackId["interakce_2A_3_int4_b"],
    url: "assets/audio/prechod_2A_3_int4_b.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_2A_3_int5_a: {
    id: TrackId["interakce_2A_3_int5_a"],
    url: "assets/audio/prechod_2A_3_int5_a.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_2A_3_klementinum: {
    id: TrackId["prechod_2A_3_klementinum"],
    url: "assets/audio/prechod_2A_3_klementinum.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_2A_4: {
    id: TrackId["prechod_2A_4"],
    url: "assets/audio/prechod_2A_4.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_2B_2: {
    id: TrackId["prechod_2B_2"],
    url: "assets/audio/prechod_2B_2.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_2B_3: {
    id: TrackId["prechod_2B_3"],
    url: "assets/audio/prechod_2B_3.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  ambient_klementinum: {
    id: TrackId["ambient_klementinum"],
    url: "assets/audio/ambient_klementinum.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_2B_3_a: {
    id: TrackId["interakce_2B_3_a"],
    url: "assets/audio/interakce_2B_3_a.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_2B_3_b: {
    id: TrackId["interakce_2B_3_b"],
    url: "assets/audio/interakce_2B_3_b.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_2B_4: {
    id: TrackId["prechod_2B_4"],
    url: "assets/audio/prechod_2B_4.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  ambient_betlemske: {
    id: TrackId["ambient_betlemske"],
    url: "assets/audio/ambient_betlemske.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_2B_4_int1_a: {
    id: TrackId["interakce_2B_4_int1_a"],
    url: "assets/audio/prechod_2B_4_int1_a.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_2B_4_int1_b: {
    id: TrackId["interakce_2B_4_int1_b"],
    url: "assets/audio/prechod_2B_4_int1_b.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_2B_5: {
    id: TrackId["prechod_2B_5"],
    url: "assets/audio/prechod_2B_5.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_2B_5_int2_a: {
    id: TrackId["interakce_2B_5_int2_a"],
    url: "assets/audio/prechod_2B_5_int2_a.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_2B_5_int2_b: {
    id: TrackId["interakce_2B_5_int2_b"],
    url: "assets/audio/prechod_2B_5_int2_b.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_2B_6: {
    id: TrackId["prechod_2B_6"],
    url: "assets/audio/prechod_2B_6.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_3A_1: {
    id: TrackId["prechod_3A_1"],
    url: "assets/audio/prechod_3A_1.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_3A_1_a: {
    id: TrackId["interakce_3A_1_a"],
    url: "assets/audio/interakce_3A_1_a.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_3A_1_b: {
    id: TrackId["interakce_3A_1_b"],
    url: "assets/audio/interakce_3A_1_b.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_3A_2: {
    id: TrackId["prechod_3A_2"],
    url: "assets/audio/prechod_3A_2.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_3B_1: {
    id: TrackId["prechod_3B_1"],
    url: "assets/audio/prechod_3B_1.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_3B_1_a: {
    id: TrackId["interakce_3B_1_a"],
    url: "assets/audio/interakce_3B_1_a.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_3B_1_b: {
    id: TrackId["interakce_3B_1_b"],
    url: "assets/audio/interakce_3B_1_b.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_3B_2: {
    id: TrackId["prechod_3B_2"],
    url: "assets/audio/prechod_3B_2.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_3_3: {
    id: TrackId["prechod_3_3"],
    url: "assets/audio/prechod_3_3.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  ambient_bartolomejska: {
    id: TrackId["ambient_bartolomejska"],
    url: "assets/audio/ambient_bartolomejska.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_3_3_a: {
    id: TrackId["interakce_3_3_a"],
    url: "assets/audio/interakce_3_3_a.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  interakce_3_3_b: {
    id: TrackId["interakce_3_3_b"],
    url: "assets/audio/interakce_3_3_b.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_4_1: {
    id: TrackId["prechod_4_1"],
    url: "assets/audio/prechod_4_1.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_4_2A: {
    id: TrackId["prechod_4_2A"],
    url: "assets/audio/prechod_4_2A.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_4_2B: {
    id: TrackId["prechod_4_2B"],
    url: "assets/audio/prechod_4_2B.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  ambient_roh_narodni: {
    id: TrackId["ambient_roh_narodni"],
    url: "assets/audio/ambient_roh_narodni.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
  prechod_5: {
    id: TrackId["prechod_5"],
    url: "assets/audio/prechod_5.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  },
};
