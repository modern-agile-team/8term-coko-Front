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

// 이 타입은 임시 타입입니다. (추후에 API 생기면 변경 예정)
export interface MainQuest {
  id: number;
  title: string;
  progress: number;
  maxProgress: number;
}

export interface DailyQuestResponse extends Quest {
  dailyQuest: DailyQuest;
}

export interface MainQuestResponse extends Quest {
  mainQuest: MainQuest;
}
