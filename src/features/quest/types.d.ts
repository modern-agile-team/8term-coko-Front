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
