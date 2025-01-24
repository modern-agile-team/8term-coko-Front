export interface Section {
  id: number;
  name: string;
  parts: Part[];
}

export interface Part {
  id: number;
  name: string;
  sectionId: number;
  status: PartStatus;
}

export type PartStatus =
  | 'LOCKED'
  | 'STARTED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | null;
