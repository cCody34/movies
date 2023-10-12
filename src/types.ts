export type Show = {
  genres: string[];
  id: number;
  language: string;
  name: string;
  status: string;
  summary: string;
  type: string;
  url: string;
  [key: string]: any;
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