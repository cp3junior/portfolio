import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Styles/Dark.scss";
import "./Styles/Custom.scss";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Screens/Home";
import Projects from "./Screens/Projects";
import Project from "./Screens/Project";
import NotFound from "./Screens/NotFound";

import translation from "./Assets/translation.json";

export const AppContext = createContext();

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
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

  const changeLanguage = (key) => {
    setLanguage(key);
    localStorage.setItem("language", key);
  };

  // Translation function
  const t = (text, key = "") => {
    if (language === "en") return text;
    return translation[key] ? translation[key] : "Pas de Traduction";
  };

  return (
    <AppContext.Provider value={{ language, t, changeLanguage, toggleTheme }}>
      <div className={isDark ? "dark-theme" : ""}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="project/:projectId" element={<Project />} />
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
