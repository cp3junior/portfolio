import React from "react";
import { BsStar } from "react-icons/bs";

import educations from "./../Documents/education.json";

import { AppContext } from "./../App";

const Education = () => {
  const { t, language } = React.useContext(AppContext);

  return (
    <section className="section bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title">
              <div className="titles">
                <h4 className="title title-line text-uppercase mb-4 pb-4">
                  {t("Education", "education")}
                </h4>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="main-icon rounded-pill text-center mt-4 pt-1">
              <BsStar className="fea icon-md-sm no-stroke" />
            </div>
            <div className="timeline-page pt-2 position-relative">
              {educations.map((item, i) => {
                if (i % 2 === 0) {
                  return (
                    <div key={i} className="timeline-item mt-4">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="duration date-label-left border rounded p-2 pl-4 pr-4 position-relative shadow text-left">
                            {language === "en" ? item.start : item.start_fr} -{" "}
                            {language === "en" ? item.end : item.end_fr}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="event event-description-right rounded p-4 border float-left text-left">
                            <h5 className="title mb-0 text-capitalize">
                              {language === "en" ? item.title : item.title_fr}
                            </h5>
                            <small className="company">
                              {language === "en"
                                ? item.subtitle
                                : item.subtitle_fr}
                            </small>
                            <p className="timeline-subtitle mt-3 mb-0 text-muted">
                              {language === "en"
                                ? item.description
                                : item.description_fr}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={i} className="timeline-item mt-4">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2">
                          <div className="event event-description-left rounded p-4 border float-left text-right">
                            <h5 className="title mb-0 text-capitalize">
                              {language === "en" ? item.title : item.title_fr}
                            </h5>
                            <small className="company">
                              {language === "en"
                                ? item.subtitle
                                : item.subtitle_fr}
                            </small>
                            <p className="timeline-subtitle mt-3 mb-0 text-muted">
                              {language === "en"
                                ? item.description
                                : item.description_fr}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                          <div className="duration duration-right rounded border p-2 pl-4 pr-4 position-relative shadow text-left">
                            {language === "en" ? item.start : item.start_fr} -{" "}
                            {language === "en" ? item.end : item.end_fr}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
