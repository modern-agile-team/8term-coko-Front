export interface Section {
  id: number;
  name: string;
  part: Part[];
}

export interface Part {
  id: number;
  name: string;
  sectionId: number;
  partStatus: PartStatus;
}

export type PartStatus =
  | 'LOCKED'
  | 'STARTED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | null;
