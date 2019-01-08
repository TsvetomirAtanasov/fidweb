import React from "react";
import { withLocalize } from "react-localize-redux";
import "./style.css";

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => {

  const getClass = (languageCode) => {
    return languageCode === activeLanguage.code ? 'lang-item active' : 'lang-item'
  };

  return (
    <span className="header-lang">
      {languages.map(lang => (
        <span className={getClass(lang.code)} key={lang.code} onClick={() => setActiveLanguage(lang.code)}>{lang.name}</span>
      ))}
    </span>
  );
};

export default withLocalize(LanguageToggle);