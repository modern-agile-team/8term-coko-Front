type CalculatePosition = (id: string) => React.CSSProperties | null;
export const calculatePosition: CalculatePosition = id => {
  const element = document.getElementById(id);
  if (!element) return null;

  const rect = element.getBoundingClientRect();
  return {
    top: `${rect.top}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
  };
};
