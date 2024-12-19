import { useRef } from 'react';

const useDragAndDrop = () => {
  const dragItem = useRef<number | null>(null); // Specify the type for dragItem
  const dragOverItem = useRef<number | null>(null); // Specify the type for dragOverItem

  const dragStart = (position: number) => {
    dragItem.current = position;
  };

  const dragEnter = (position: number) => {
    dragOverItem.current = position;
  };

  const drop = (callback: () => void) => {
    callback();
  };
  return { dragStart, dragEnter, drop };
};
export default useDragAndDrop;
