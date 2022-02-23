import React from "react";
import { BsTranslate, BsAward, BsEmojiSunglasses } from "react-icons/bs";
import ReactHtmlParser from "react-html-parser";

import { AppContext } from "../App";

const Abilities = () => {
  const { t } = React.useContext(AppContext);

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title">
              <div className="titles">
                <h4 className="title title-line text-uppercase mb-4 pb-4">
                  {t("Abilities", "abilities")}
                </h4>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pt-5 pb-5">
              <div className="icon text-primary">
                <BsTranslate className="fea no-stroke icon-md" />
              </div>
              <div className="content mt-4">
                <h5 className="title">
                  {t("Bilingual", "abilities.bilingual")}
                </h5>
                <p className="text-muted mt-3 mb-0">
                  {ReactHtmlParser(
                    t(
                      "Native <b>French</b> Speaker that also have a good business level <b>English</b> Language skills.",
                      "abilities.bilingual.desc"
                    )
                  )}
                </p>
              </div>
              <div className="big-icon">
                <BsTranslate className="fea no-stroke icons" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pt-5 pb-5">
              <div className="icon text-primary">
                <BsAward className="fea no-stroke icon-md" />
              </div>
              <div className="content mt-4">
                <h5 className="title">
                  {t("Self-motivated", "abilities.self")}
                </h5>
                <p className="text-muted mt-3 mb-0">
                  {ReactHtmlParser(
                    t(
                      "<b>Enthusiastic</b> and <b>passionate</b> about technology. Likes <b>learning</b> new technologies.",
                      "abilities.self.desc"
                    )
                  )}
                </p>
              </div>
              <div className="big-icon">
                <BsAward className="fea no-stroke icons" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pt-5 pb-5">
              <div className="icon text-primary">
                <BsEmojiSunglasses className="fea no-stroke icon-md" />
              </div>
              <div className="content mt-4">
                <h5 className="title">
                  {t("Adaptability", "abilities.adapt")}
                </h5>
                <p className="text-muted mt-3 mb-0">
                  {ReactHtmlParser(
                    t(
                      "<b>Sociable</b> and <b>concerned</b> with understanding and meeting the needs of <b>customers</b>.",
                      "abilities.adapt.desc"
                    )
                  )}
                </p>
              </div>
              <div className="big-icon">
                <BsEmojiSunglasses className="fea no-stroke icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abilities;
