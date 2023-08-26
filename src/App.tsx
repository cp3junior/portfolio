import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Styles/Dark.scss";
import "./Styles/Custom.scss";

import { ContextInterface, TranslationInterface } from "./Helpers/interfaces";
import { Header, Footer } from "./Components";
import { Home, Projects, Project, NotFound } from "./Screens";

export const AppContext = createContext<ContextInterface>({
  language: "",
  t: () => "",
  toggleTheme: () => "",
  changeLanguage: () => "",
});

const App = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("en");
  const [translation, setTranslation] = useState<TranslationInterface>({});

  useEffect(() => {
    const translationUrl = `${process.env.REACT_APP_CDN}Assets/translation.json`;

    fetch(translationUrl)
      .then((res) => res.json())
      .then((data) => setTranslation(data))
      .catch(console.error);

    const thm = localStorage.getItem("theme");
    if (thm === "dark") setIsDark(true);

    const lg = localStorage.getItem("language");
    if (!lg) localStorage.setItem("language", "en");
    else setLanguage(lg);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      if (prev) localStorage.setItem("theme", "light");
      else localStorage.setItem("theme", "dark");
      return !prev;
    });
  };

  const changeLanguage = (key: string): void => {
    setLanguage(key);
    localStorage.setItem("language", key);
  };

  // Translation function
  const t = (text: string, key: string = ""): string => {
    if (language === "en") return text;
    return translation[key] ? translation[key] : "";
  };

  return (
    <AppContext.Provider value={{ language, t, changeLanguage, toggleTheme }}>
      <div className={isDark ? "dark-theme" : ""}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="project/:projectKey" element={<Project />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
};

export default App;
