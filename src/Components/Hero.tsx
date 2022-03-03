import React from "react";
import { Link } from "react-router-dom";
import { ImDownload } from "react-icons/im";

import { AppContext } from "../App";

const Hero = () => {
  const { t, language } = React.useContext(AppContext);

  const pdfPath = `${
    process.env.REACT_APP_CDN
  }Assets/RAILALA Andriatsimarivo CV ${language === "en" ? "EN" : "FR"}.pdf`;
  const bgPath = `${process.env.REACT_APP_CDN}Assets/bg2.png`;

  return (
    <section
      className="bg-home bg-light d-table w-100 herosection"
      style={{
        backgroundImage: `url(${bgPath})`,
        backgroundPositionX: "right",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="title-heading mt-5">
              <h1 className="sub-title mainsub">
                {t("ReactJS Developer", "hero.react")}
              </h1>
              <h2 className="heading text-primary mb-3">
                <span>{t("I'm RAILALA Andriatsimarivo", "hero.name")}</span>
              </h2>
              <p className="para-desc text-dark">
                <span>
                  {t(
                    "I am a ReactJS Developer with 5 years of experience in FullStack Web Development. During my years of experiences, I have had the opportunity to work on several websites and mobile applications in various fields. Experienced with all stages of the development cycle for dynamic web projects.",
                    "hero.intro"
                  )}
                </span>
              </p>
              <div className="mt-4 pt-2">
                <Link
                  to="/projects"
                  className="btn btn-primary rounded mb-2 mr-2"
                >
                  {t("View Projects", "hero.view")}
                </Link>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={pdfPath}
                  download="CV RAILALA Andriatsimarivo.pdf"
                  className="btn btn-outline-primary rounded mb-2"
                >
                  {t("Download CV", "hero.download")}{" "}
                  <ImDownload className="mb-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
