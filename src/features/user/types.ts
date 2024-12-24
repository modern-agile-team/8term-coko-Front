export interface User {
  id: number;
  nickname: string;
  level: number;
  point: number;
}

export interface RankedUser extends User {
  rank: number;
}

export interface ExperiencedUser extends User {
  experience: number;
  experienceForNextLevel: number;
}