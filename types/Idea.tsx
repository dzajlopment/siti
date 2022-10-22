export interface Idea {
  readonly id: string;
  title: string;
  description: string;
  justification: string;
  created: Date;
  location: string | Location;
  cost?: number;
  status?: IdeaStatus;
  voting: IdeaVoting;
}

export type IdeaForm = Omit<Idea, "id" | "created" | "voting">;

export enum IdeaStatus {
  Approved = "approved",
  Rejected = "rejected",
}

export interface Location {
  lat: number;
  lng: number;
}

export interface IdeaVoting {
  liked: boolean;
  score: number;
}
