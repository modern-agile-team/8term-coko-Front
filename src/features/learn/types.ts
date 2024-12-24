export interface Part {
  id: number;
  sectionId: number;
  name: string;
}

export interface Section {
  id: number;
  name: string;
  part: Part[];
}
