import { create } from 'zustand';

interface State {}
interface Actions {}

export const useDnDStore = create<State & Actions>((set, get) => ({}));
