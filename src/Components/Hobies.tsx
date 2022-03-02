import React from "react";
import { AiOutlineCode } from "react-icons/ai";

import { AppContext } from "../App";
import { skills } from "../Helpers/constants";

const Hobies = () => {
  const { t } = React.useContext(AppContext);

  return (
    <section className="section pb-10 pt-0">
      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title">
              <div className="titles">
                <h4 className="title title-line text-uppercase mb-4 pb-4">
                  {t("Skills", "skills")}
                </h4>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {skills.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
              <div className="interests-desc bg-light position-relative px-2 py-3 rounded">
                <div className="hobbies d-flex align-items-center">
                  <div className="text-center rounded-pill mr-4">
                    <AiOutlineCode className="icon fea icon-md-sm" />
                  </div>
                  <div className="content">
                    <h6 className="title mb-0">{item.value}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobies;
