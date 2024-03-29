import { useEffect, useState, useContext, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { BsFillMoonStarsFill, BsTranslate } from "react-icons/bs";

import { AppContext } from "../App";
import { pages } from "../Helpers/constants";

const Header = () => {
  const [active, setActive] = useState<string>("");
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
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
  }, []);

  useEffect(() => {
    setActive(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleMobileNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowMobileNav((prev) => !prev);
  };

  const handleTheme = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toggleTheme();
  };

  const switchLang = (key: string): void => {
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
          RAILALA.COM
        </Link>
        <button
          className={`navbar-toggler ${showMobileNav ? "active" : ""}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded={showMobileNav ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleMobileNav}
        >
          <MdMenu />
        </button>

        <div
          className={`collapse navbar-collapse ${showMobileNav ? "show" : ""}`}
          id="navbarCollapse"
        >
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
              <span
                onClick={handleTheme}
                title="Dark/Light Theme"
                className="first"
              >
                <BsFillMoonStarsFill />
              </span>
            </li>
            <li className="list-inline-item">
              <span className="language-switcher" title="Language switcher">
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
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default memo(Header);
