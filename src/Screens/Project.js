import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import {
  BsHouseFill,
  BsArrowRightShort,
  BsArrowLeftShort,
} from "react-icons/bs";

import { AppContext } from "./../App";
import _projects from "./../Assets/project.json";

const Project = () => {
  const [countProjects, setCountProjects] = useState(0);
  const [project, setProject] = useState({
    id: 0,
    type: "",
    title: "",
    title_fr: "",
    url: "",
    image: "",
    thumbnail1: "",
    thumbnail2: "",
    description: "",
    description_fr: "",
    client: "",
    country: "",
    country_fr: "",
    employer: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  const { t, language } = React.useContext(AppContext);

  const projectId = parseInt(params.projectId, 10);

  useEffect(() => {
    if (projectId > 0 && projectId < _projects.length + 1) {
      setCountProjects(_projects.length);
      const prj = _projects.filter((item) => item.id === projectId);
      if (prj.length > 0) setProject(prj[0]);
    } else {
      navigate("/404");
    }
  }, [projectId, navigate]);

  const renderImg = (path) => {
    if (path) {
      return (
        <img
          src={require(`./../Assets/${path}`)}
          className="img-fluid mx-auto d-block rounded mb-4"
          alt={`Pic ${language === "en" ? project.title : project.title_fr}`}
        />
      );
    }
  };

  return (
    <>
      <section
        className="bg-half d-table w-100"
        style={{
          backgroundImage: `url(${require("./../Assets/bg2.png")})`,
          backgroundPositionX: "right",
        }}
      >
        <div className="bg-overlay bg-overlay-gray"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="page-next-level">
                <h4 className="title">
                  {" "}
                  {language === "en" ? project.title : project.title_fr}{" "}
                </h4>
                <ul className="page-next custom bg-dark text-light d-inline-block py-2 px-4 mt-3 rounded mb-0">
                  <li>
                    <Link to="/" className="text-light">
                      RAILALA
                    </Link>
                  </li>
                  <AiOutlineRight />
                  <li>
                    <Link to="/projects" className="text-light">
                      {t("Projects", "header.projects")}
                    </Link>
                  </li>
                  <AiOutlineRight />
                  <li>
                    <span className="text-primary">
                      {" "}
                      {t("Project Detail", "project.detail")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="row mr-lg-4">
                <div className="col-lg-12">
                  <div className="work-details">
                    <h4 className="title mb-3 border-bottom pb-3">
                      {language === "en" ? project.title : project.title_fr}
                    </h4>
                    <p
                      className="text-muted"
                      dangerouslySetInnerHTML={{
                        __html:
                          language === "en"
                            ? project.description
                            : project.description_fr,
                      }}
                    ></p>
                  </div>
                </div>
                <div className="col-lg-7 mt-4 pt-2">
                  <div className="work-details bg-light p-4">
                    <h4 className="title border-bottom pb-3 mb-3">
                      {t("Project Info", "project.info")} :
                    </h4>
                    <ul className="list-unstyled mb-0">
                      <li className="mt-3">
                        <b>{t("Technology", "project.tech")} : </b>
                        <span>{project.stack}</span>
                      </li>
                      <li className="mt-3">
                        <b>Client : </b>
                        <span>{project.client}</span>
                      </li>
                      <li className="mt-3">
                        <b>{t("Work Category", "project.work")} : </b>
                        <span>{project.type}</span>
                      </li>
                      <li className="mt-3">
                        <b>{t("Employer", "project.employer")} : </b>
                        <span>{project.employer}</span>
                      </li>
                      <li className="mt-3">
                        <b>{t("Country", "project.country")} : </b>
                        <span>
                          {language === "en"
                            ? project.country
                            : project.country_fr}
                        </span>
                      </li>
                      {project.url && (
                        <li className="mt-3">
                          <b>Demo : </b>
                          <span>
                            <a
                              href={project.url}
                              target="_blank"
                              className="text-primary"
                              rel="noreferrer"
                            >
                              {t("Demo Link", "project.demo")}
                            </a>
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 order-1 order-md-2">
              <div className="port-images sticky-sidebar">
                {renderImg(project.image)}
                {renderImg(project.thumbnail1)}
                {renderImg(project.thumbnail2)}
                {renderImg(project.thumbnail3)}
              </div>
            </div>
          </div>

          <div className="row mt-4 pt-2">
            <div className="col-12">
              <ul className="pagination justify-content-center mb-0 list-unstyled">
                <li>
                  <Link
                    to={`/project/${projectId - 1}`}
                    className={`pr-3 pl-3 pt-2 pb-2 ${
                      projectId === 1 ? "disabled-link" : ""
                    }`}
                  >
                    <BsArrowLeftShort className="with-stroke mb2" />{" "}
                    {t("Prev", "project.prev")}
                  </Link>
                </li>
                <li>
                  <Link to="/" className="pr-3 pl-3 pt-2 pb-2">
                    <BsHouseFill className="mb-1" /> {t("Home", "header.home")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/project/${projectId + 1}`}
                    className={`pr-3 pl-3 pt-2 pb-2 ${
                      projectId === countProjects ? "disabled-link" : ""
                    }`}
                  >
                    {t("Next", "project.next")}{" "}
                    <BsArrowRightShort className="with-stroke mb2" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
