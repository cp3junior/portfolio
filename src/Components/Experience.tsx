import { useState, useLayoutEffect, useContext, memo } from "react";
import { BsStar } from "react-icons/bs";

import { ExperienceInterface } from "../Helpers/interfaces";
import { AppContext } from "../App";
import { getTranslatedData } from "../Helpers/utils";
import TimelineItem from "./TimelineItem";

const Experience = () => {
  const { t, language } = useContext(AppContext);
  const [experiences, setExperiences] = useState<ExperienceInterface[]>([]);

  useLayoutEffect(() => {
    const experienceUrl = `${process.env.REACT_APP_CDN}Assets/experiences_3.json`;

    fetch(experienceUrl)
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="section bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title">
              <div className="titles">
                <h4 className="title title-line text-uppercase mb-4 pb-4">
                  {t("Work Experience", "experience")}
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
              {experiences.map((item, i) => (
                <TimelineItem
                  key={item.key}
                  isRight={i % 2 === 0}
                  start={getTranslatedData(language, item, "start", "start_fr")}
                  end={getTranslatedData(language, item, "end", "end_fr")}
                  title={getTranslatedData(language, item, "title", "title_fr")}
                  subtitle={getTranslatedData(
                    language,
                    item,
                    "subtitle",
                    "subtitle_fr"
                  )}
                  description={getTranslatedData(
                    language,
                    item,
                    "description",
                    "description_fr"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Experience);
