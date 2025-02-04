export interface User {
  id: number;
  name: string;
  level: number;
  point: number;
  createdAt: string;
}

export interface RankedUser extends User {
  myRanking: number;
}

export interface ExperiencedUser extends User {
  experience: number;
  experienceForNextLevel: number;
}

export interface UserHp extends Pick<User, 'id'> {
  hp: number;
  hpStorage: number;
}

export interface UserProgress {
  totalQuizCount: number;
  totalUserProgressCount: number;
  correctUserProgressCount: number;
  inCorrectUserProgressCount: number;
}
