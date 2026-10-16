export const PRACTICE_CATEGORIES = [
  "song",
  "technique",
  "theory",
  "ear-training",
] as const;

export const INSTRUMENTS = [
  "electric-guitar",
  "classical-guitar",
  "acoustic-guitar",
  "bass-guitar",
  "piano",
  "keyboard",
  "drums",
  "violin",
  "cello",
] as const;

export const PRACTICE_PROGRESS_STATUS = [
  "to-practice",
  "practicing",
  "done",
] as const;

export type PracticeCategory = (typeof PRACTICE_CATEGORIES)[number];
export type InstrumentType = (typeof INSTRUMENTS)[number];
