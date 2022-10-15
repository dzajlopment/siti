export interface Idea {
  readonly id: string;
  title: string;
  description: string;
  justification: string;
  created: Date;
  location: string | Location;
  cost: number;
  status?: IdeaStatus;
}

export enum IdeaStatus {
  Approved,
  Rejected,
}

export interface Location {
  lat: string;
  lng: string;
}
