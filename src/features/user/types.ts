export interface User {
  id: number;
  name: string;
  level: number;
  point: number;
  totalAttendance: number;
  createdAt: string;
}

export interface RankedUser extends User {
  ranking: number;
}

export interface PersonalRanking {
  ranking: number;
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

export interface UserAttendance {
  id: number;
  date: string;
}

export interface Opinions {
  title: string;
  content: string;
}

export interface ChallengeResponse {
  totalCount: number;
  totalPage: number;
  currentPage: number;
  limit: number;
  contents: ChallengeItem[];
}

export interface ChallengeItem {
  id: number;
  userId: number;
  challengeId: number;
  completed: boolean;
  completedDate: string;
  challenge: {
    id: number;
    content: string;
    point: number;
    experience: number;
    challengeType: BaseChallengeType;
    condition: number;
    badgeName: string;
  };
}

export type BaseChallengeType =
  | 'SECTION_CLEAR'
  | 'LEVEL_CLEAR'
  | 'ATTENDANCE_STREAK'
  | 'LEVEL_RANKING_ATTAIN'
  | 'POINT_RANKING_ATTAIN'
  | 'ATTENDANCE_RANKING_ATTAIN'
  | 'CORRECT_ANSWER_RANKING_ATTAIN'
  | 'EVENT';

export type EventChallengeType =
  | 'ALL_SECTIONS_CLEAR'
  | 'FIRST_ITEM_PURCHASE'
  | 'FIRST_WRONG_ANSWER'
  | 'FIRST_404_VISIT';

export type ChallengeType = BaseChallengeType | EventChallengeType;
