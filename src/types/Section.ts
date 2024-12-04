import Part from './Part';

export default interface Section {
  id: number;
  name: string;
  part: Part[];
}
