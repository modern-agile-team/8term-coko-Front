export interface Section {
  id: number;
  name: string;
  part: Part[];
}

export interface Part {
  id: number;
  name: string;
  sectionId: number;
}