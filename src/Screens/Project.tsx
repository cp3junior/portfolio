import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { AiOutlineRight } from "react-icons/ai";
import {
  BsHouseFill,
  BsArrowRightShort,
  BsArrowLeftShort,
} from "react-icons/bs";

import { AppContext } from "../App";
import { ProjectInterface } from "../Helpers/interfaces";
import { projectImageBasePath } from "../Helpers/constants";

const Project = () => {
  const [countProjects, setCountProjects] = useState<number>(0);
  const [project, setProject] = useState<ProjectInterface>({
    id: 0,
    type: "",
    title: "",
    title_fr: "",
    stack: "",
    url: "",
    image: "",
    thumbnail1: "",
    thumbnail2: "",
    thumbnail3: "",
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

  const projectId = parseInt(params.projectId ? params.projectId : "0", 10);
  const bgPath = `${process.env.REACT_APP_CDN}Assets/bg2.png`;

  useEffect(() => {
    const projectsUrl = `${process.env.REACT_APP_CDN}Assets/projects.json`;

    fetch(projectsUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.length && projectId > 0 && projectId < data.length + 1) {
          setCountProjects(data.length);

          const prj = data.filter(
            (item: ProjectInterface) => item.id === projectId
          );
          if (prj.length > 0) setProject(prj[0]);
        } else {
          navigate("/404");
        }
      })
      .catch((e) => console.log(e));
  }, [projectId, navigate]);

  const renderImg = (path: string | undefined) => {
    if (path) {
      return (
        <picture>
          <source
            srcSet={`${projectImageBasePath}${path}.webp`}
            type="image/webp"
          />
          <img
            src={`${projectImageBasePath}${path}.jpg`}
            className="img-fluid mx-auto d-block rounded mb-4 shadow"
            width="500"
            height="333"
            alt={`Illustration of ${
              language === "en" ? project.title : project.title_fr
            }`}
          />
        </picture>
      );
    }
    return null;
  };

  return (
    <>
      <section
        className="bg-half d-table w-100"
        style={{
          backgroundImage: `url(${bgPath})`,
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
                      RAILALA.COM
                    </Link>
                    <AiOutlineRight />
                  </li>
                  <li>
                    <Link to="/projects" className="text-light">
                      {t("Projects", "header.projects")}
                    </Link>
                    <AiOutlineRight />
                  </li>
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
            <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="row mr-lg-4">
                <div className="col-lg-12">
                  <div className="work-details">
                    <h4 className="title mb-3 border-bottom pb-3">
                      {language === "en" ? project.title : project.title_fr}
                    </h4>
                    <p className="text-muted">
                      {ReactHtmlParser(
                        language === "en"
                          ? project.description
                          : project.description_fr
                      )}
                    </p>
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
                              href={`https://${project.url}`}
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

            <div className="col-lg-5 col-md-6">
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

export default React.memo(Project);
