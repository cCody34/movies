export type ShowInfo = {
  genres: string[];
  id: number;
  language: string;
  name: string;
  status: string;
  summary: string;
  type: string;
  url: string;
} & {
  [key: string]: any;
};

export type Show = {
  score: number;
  show: ShowInfo;
};

type PersonImage = {
  medium: string;
  original: string;
};

export type PersonInfo = {
  id: number;
  name: string;
  birthday: string;
  image: PersonImage | null;
} & {
  [key: string]: any;
};

export type Person = {
  score: number;
  person: PersonInfo;
};
