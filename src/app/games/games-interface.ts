export interface amiiboI {
  amiibo: GameI[];
}

export interface GameI {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  release: releaseI;
  tail: string;
  type: string;
}

export interface releaseI {
  au: string;
  eu: string;
  jp: string;
  na: string;
}
