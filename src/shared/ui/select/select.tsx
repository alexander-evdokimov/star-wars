import { cn } from "@/shared/utils";
import { useState } from "react";
import styles from "./select.module.scss";

type Option<T> = {
  label: string;
  value: T;
};

interface Props<T> {
  className?: string;
  options: Option<T>[];
  defaultValue?: T;
  onChange?: (value: T) => void;
}

export const Select = <T extends string | number>({
  className,
  options,
  onChange,
  defaultValue,
}: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<T | undefined>(defaultValue);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (option: T) => {
    setSelected(option);
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <div className={cn(styles.selectWrapper, className)}>
      <button className={styles.select} onClick={toggleDropdown}>
        {selected || "Выберите опцию"}
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {options
            .filter((option) => option.value !== selected)
            .map((option) => (
              <button
                key={option.value}
                className={styles.option}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};
