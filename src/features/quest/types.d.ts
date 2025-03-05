export interface Quest {
  id: number;
  userId: number;
  conditionProgress: number;
  completed: boolean;
}

export interface DailyQuest {
  id: number;
  content: string;
  point: number;
  experience: number;
  condition: number;
}

export interface DailyQuestResponse extends Quest {
  dailyQuest: DailyQuest;
}

export interface ChallengeApiResponse {
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
    challengeType: ChallengeType;
    condition: number;
    badgeName: string;
  };
}

export type ChallengeType =
  | 'SECTION_CLEAR'
  | 'LEVEL_CLEAR'
  | 'ALL_SECTIONS_CLEAR'
  | 'ATTENDANCE_STREAK'
  | 'LEVEL_RANKING_ATTAIN'
  | 'POINT_RANKING_ATTAIN'
  | 'ATTENDANCE_RANKING_ATTAIN'
  | 'CORRECT_ANSWER_RANKING_ATTAIN'
  | 'FIRST_ITEM_PURCHASE'
  | 'FIRST_WRONG_ANSWER'
  | 'FIRST_404_VISIT';
