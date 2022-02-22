import React from "react";
import { Link } from "react-router-dom";
import { ImDownload } from "react-icons/im";

import { AppContext } from "./../App";

import pdf from "./../Documents/RAILALA Andriatsimarivo CV.pdf";

const Hero = () => {
  const { t } = React.useContext(AppContext);

  return (
    <section
      className="bg-home bg-light d-table w-100"
      style={{
        backgroundImage: `url(${require("./../Documents/bg2.png")})`,
        backgroundPositionX: "right",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="title-heading mt-5">
              <h6 className="sub-title">
                {t("ReactJS Developer", "hero.react")}
              </h6>
              <h1 className="heading text-primary mb-3">
                {t("I'm RAILALA Andriatsimarivo", "hero.name")}
              </h1>
              <p className="para-desc text-dark">
                {t(
                  "I am a ReactJS Developer with 5 years of experience in FullStack Web Development. During my years of experiences, I have had the opportunity to work on several websites and mobile applications in various fields. Experienced with all stages of the development cycle for dynamic web projects.",
                  "hero.intro"
                )}
              </p>
              <div className="mt-4 pt-2">
                <Link
                  to="/projects"
                  className="btn btn-primary rounded mb-2 mr-2"
                >
                  {t("View Projects", "hero.view")}
                </Link>
                <a
                  href={pdf}
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
