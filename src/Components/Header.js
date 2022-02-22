/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { BsFillMoonStarsFill, BsTranslate } from "react-icons/bs";

import { AppContext } from "./../App";
import { pages } from "../Helpers/constants";

const Header = () => {
  const [active, setActive] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const { pathname } = useLocation();

  const { changeLanguage, language, toggleTheme, t } = useContext(AppContext);

  useEffect(() => {
    document.addEventListener(
      "scroll",
      () => {
        const scroll = window.pageYOffset;
        scroll >= 50 ? setIsSticky(true) : setIsSticky(false);
      },
      { passive: true }
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const handleTheme = (e) => {
    e.preventDefault();
    toggleTheme();
  };

  const switchLang = (key) => {
    if (language !== key) changeLanguage(key);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky ${
        isSticky ? "nav-sticky" : ""
      }`}
    >
      <div className="container">
        <Link className="navbar-brand" id="nav-bar-style" to="/">
          RAILALA
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MdMenu />
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav navbar-nav-link mx-auto">
            {pages.map((item) => (
              <li
                key={item.path}
                className={`nav-item ${active === item.path ? "active" : ""}`}
              >
                <Link className="nav-link" to={item.path}>
                  {t(item.name, item.key)}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="list-unstyled mb-0 mt-2 mt-sm-0 social-icon header-icons">
            <li className="list-inline-item mr-2">
              <a
                href="#"
                onClick={handleTheme}
                title="Dark/Light Theme"
                className="first"
              >
                <BsFillMoonStarsFill />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="language-switcher" title="Language switcher">
                <BsTranslate />
                <span
                  onClick={() => switchLang("en")}
                  title="English"
                  className={`english-lang ${
                    language === "en" ? "active" : ""
                  }`}
                >
                  EN
                </span>
                <span
                  className={`${language === "fr" ? "active" : ""}`}
                  onClick={() => switchLang("fr")}
                  title="French"
                >
                  FR
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
