import { create } from 'zustand';
type dragItemType = { value: string; index: number } | null;
interface State {
  dragStartItem: dragItemType;
  dragOverItem: dragItemType;
}
interface Action {
  setdragStartItem: (item: dragItemType) => void;
  setdragOverItem: (item: dragItemType) => void;
  drop: (
    callback: (dragStartItem: dragItemType, dragOverItem: dragItemType) => void
  ) => void;
  reset: () => void;
}
export const useDnDStore = create<State & Action>((set, get) => ({
  dragStartItem: null,
  dragOverItem: null,
  setdragStartItem: index => set(() => ({ dragStartItem: index })),

  setdragOverItem: index => set(() => ({ dragOverItem: index })),

  reset: () => set(() => ({ dragOverItem: null, dragStartItem: null })),
  drop: callback => {
    const { dragStartItem, dragOverItem, reset } = get();
    callback(dragStartItem, dragOverItem);
    reset();
  },
}));
