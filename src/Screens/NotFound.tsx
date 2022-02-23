import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../App";

const NotFound = () => {
  const { t } = useContext(AppContext);

  return (
    <section className="section pb-6">
      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title">
              <div className="titles">
                <h4 className="title title-line text-uppercase mb-4 pb-4">
                  {t("Oops... 404 Not Found", "notfound.404")}
                </h4>
                <span></span>
              </div>
              <p className="text-muted mx-auto para-desc mb-0">
                {t("Return to Home Page", "notfound.return")}
              </p>
              <p>
                <Link
                  to="/"
                  className="btn btn-outline-primary rounded mb-2 mt-4"
                >
                  {t("Home Page", "notfound.home")}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
