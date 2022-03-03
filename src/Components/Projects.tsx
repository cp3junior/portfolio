import React, { useLayoutEffect, useState } from "react";
import { BsEyeFill, BsTags, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

import { AppContext } from "../App";
import { ProjectInterface } from "../Helpers/interfaces";
import { projectImageBasePath } from "../Helpers/constants";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectInterface[]>([]);
  const { t, language } = React.useContext(AppContext);

  useLayoutEffect(() => {
    const projectsUrl = `${process.env.REACT_APP_CDN}Assets/projects.json`;

    fetch(projectsUrl)
      .then((res) => res.json())
      .then((data) => {
        const arr = [];
        // Limit projects to 3
        for (let i = 0; i < 3; i++) {
          const el = data[i];
          if (el) arr.push(el);
        }
        setProjects(arr);
      })
      .catch((e) => console.log(e));
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
          {projects.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <Link to={`/project/${item.id}`}>
                <div className="blog-post rounded shadow">
                  <picture>
                    <source
                      srcSet={`${projectImageBasePath}${item.image}.webp`}
                      type="image/webp"
                    />
                    <img
                      src={`${projectImageBasePath}${item.image}.jpg`}
                      className="img-fluid rounded-top"
                      width="500"
                      height="333"
                      alt={`Illustration of ${
                        language === "en" ? item.title : item.title_fr
                      }`}
                    />
                  </picture>
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

export default React.memo(Projects);
