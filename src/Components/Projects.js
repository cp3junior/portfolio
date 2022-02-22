import React, { useEffect, useState } from "react";
import { BsEyeFill, BsTags, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

import _projects from "./../Assets/project.json";

import { AppContext } from "./../App";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { t, language } = React.useContext(AppContext);

  useEffect(() => {
    // Limit projects to 3
    const arr = [];
    for (let i = 0; i < 3; i++) {
      const el = _projects[i];
      if (el) arr.push(el);
    }
    setProjects(arr);
  }, []);

  return (
    <section className="section pb-10">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title">
              <div className="titles">
                <h4 className="title title-line text-uppercase mb-4 pb-4">
                  {t("Projects", "header.projects")}
                </h4>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {projects.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <Link to={`/project/${item.id}`}>
                <div className="blog-post rounded shadow">
                  <img
                    src={require(`./../Assets/${item.image}`)}
                    className="img-fluid rounded-top"
                    alt={language === "en" ? item.title : item.title_fr}
                  />
                  <div className="content pt-4 pb-4 p-3">
                    <ul className="list-unstyled d-flex justify-content-between post-meta">
                      <li>
                        <BsPerson className="fea icon-sm mr-1 no-stroke" />
                        <span className="text-dark">{item.employer}</span>
                      </li>
                      <li>
                        <BsTags className="fea icon-sm mr-1 no-stroke" />
                        <span className="text-dark">{item.type}</span>
                      </li>
                    </ul>
                    <h5 className="mb-3">
                      <span className="title text-dark">
                        {language === "en" ? item.title : item.title_fr}
                      </span>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          <div className="col-12 mt-5 text-center">
            <div className="mt-4">
              <Link to="/projects" className="btn btn-primary mouse-down">
                {t("See All", "seeall")}{" "}
                <BsEyeFill className="fea icon-sm no-stroke" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
