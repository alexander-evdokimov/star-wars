import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const LanguageSwitcher: React.FC<Props> = ({ className }) => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "wookie" : "en");
  };

  return (
    <div className={className}>
      <button onClick={changeLanguage}>Language: {i18n.language.split("-")[0]}</button>
    </div>
  );
};
