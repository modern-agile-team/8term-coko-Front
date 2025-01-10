import { create } from 'zustand';
type dragItemType = { value: string; index: number };

interface State {
  dragStartItem: dragItemType | null;
  dragOverItem: dragItemType | null;
  isOutsideDropZone: boolean;
}
interface Actions {
  setDragStartItem: (item: dragItemType) => void;
  setDragOverItem: (item: dragItemType) => void;
  drop: (
    callback: (dragStartItem: dragItemType, dragOverItem: dragItemType) => void
  ) => void;
  setOutsideDropZone: (isOutSide: boolean) => void;
  reset: () => void;
}

export const useDnDStore = create<State & Actions>((set, get) => ({
  dragStartItem: null,
  dragOverItem: null,
  isOutsideDropZone: false,

  setDragStartItem: item => set(() => ({ dragStartItem: item })),
  setDragOverItem: item => set(() => ({ dragOverItem: item })),
  setOutsideDropZone: isOutSide =>
    set(() => ({ isOutsideDropZone: isOutSide })),
  drop: callback => {
    const { dragStartItem, dragOverItem, reset } = get();
    if (dragStartItem && dragOverItem) {
      callback(dragStartItem, dragOverItem);
    }
    reset();
  },
  reset: () => set(() => ({ dragOverItem: null, dragStartItem: null })),
}));
