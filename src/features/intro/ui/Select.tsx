import { SelectWrapper } from '@/features/intro/ui/styles';
import { useOutsidePointerDown, useToggle } from '@modern-kit/react';
import { createContext, useContext, PropsWithChildren, useRef } from 'react';

const SelectContext = createContext<{
  isOpen: boolean;
  toggleIsOpen: () => void;
  onChange: (value: string) => void;
} | null>(null);

export default function Select({
  children,
  buttonName,
  onChange,
}: PropsWithChildren<{
  buttonName: string;
  onChange: (value: string) => void;
}>) {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const ulRef = useOutsidePointerDown<HTMLUListElement>(toggleIsOpen);

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        toggleIsOpen,
        onChange,
      }}
    >
      <SelectWrapper>
        {isOpen ? (
          <ul ref={ulRef}>{children}</ul>
        ) : (
          <button onClick={toggleIsOpen} ref={buttonRef}>
            {buttonName}
          </button>
        )}
      </SelectWrapper>
    </SelectContext.Provider>
  );
}

Select.Option = function Option({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const context = useContext(SelectContext);
  if (!context) {
    return null;
  }

  const { isOpen, toggleIsOpen, onChange } = context;
  const handleOnClick = () => {
    onChange(value);
    toggleIsOpen();
  };
  return isOpen && <li onClick={handleOnClick}>{label}</li>;
};
