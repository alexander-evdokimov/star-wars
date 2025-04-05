import { Select } from "@/shared/ui";
import { cn } from "@/shared/utils";
import React from "react";
import { FilterEyeColor, filterEyeColors } from "../../model/constants";
import styles from "./character-filters.module.scss";

interface Props {
  className?: string;
  onChangeEyeColor: (value: FilterEyeColor) => void;
}

export const CharacterFilters: React.FC<Props> = ({ className, onChangeEyeColor }) => {
  return (
    <div className={cn(className)}>
      <div className={styles.filters}>
        <div className={styles.filterWrapper}>
          <span>color eye</span>
          <Select
            onChange={onChangeEyeColor}
            className={styles.filter}
            options={filterEyeColors}
            defaultValue="all"
          />
        </div>
      </div>
    </div>
  );
};
