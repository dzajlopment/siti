export interface Idea {
  readonly id: string;
  title: string;
  description: string;
  justification: string;
  created: Date;
  location: string | Location;
  cost: number;
  status?: IdeaStatus;
  voting: IdeaVoting;
}

export enum IdeaStatus {
  Approved,
  Rejected,
}

export interface Location {
  lat: number;
  lng: number;
}

export interface IdeaVoting {
  liked: boolean;
  score: number;
}
