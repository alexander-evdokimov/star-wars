import React, { PropsWithChildren, useEffect } from "react";
import styles from "./modal.module.scss";
import { cn } from "@/shared/utils";
import { createPortal } from "react-dom";

interface Props {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
  isOpen,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div onClick={handleClose} className={cn(styles.modalOverlay, className)}>
      <div className={styles.modalWrapper}>
        <div className={styles.modal}>{children}</div>
        <button onClick={onClose} className={styles.close}></button>
      </div>
    </div>,
    document.body
  );
};
