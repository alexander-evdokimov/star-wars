import { cn } from "@/shared/utils";
import styles from "./container.module.scss";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Container: FC<PropsWithChildren<Props>> = ({ className, children, ...props }) => {
  return (
    <div {...props} className={cn(styles.container, className)}>
      {children}
    </div>
  );
};
