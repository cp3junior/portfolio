import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { BsTags, BsPerson, BsSearch } from "react-icons/bs";

import { AppContext } from "../App";
import { ProjectInterface } from "../Helpers/interfaces";
import { projectImageBasePath } from "../Helpers/constants";

const Projects = () => {
  const [countFull, setCountFull] = useState<number>(0);
  const [countContr, setCountContr] = useState<number>(0);
  const [projects, setProjects] = useState<ProjectInterface[]>([]);
  const [baseprojects, setBaseProjects] = useState<ProjectInterface[]>([]);
  const [search, setSearch] = useState<string>("");
  const [showClearFilter, setShowClearFilter] = useState<boolean>(false);

  const { t, language } = React.useContext(AppContext);

  const bgPath = `${process.env.REACT_APP_CDN}Assets/bg2.png`;

  useLayoutEffect(() => {
    const projectsUrl = `${process.env.REACT_APP_CDN}Assets/projects.json`;

    fetch(projectsUrl)
      .then((res) => res.json())
      .then((data: ProjectInterface[]) => {
        let cF = 0,
          cC = 0;
        for (let i = 0; i < data.length; i++) {
          const el = data[i];
          if (el.type === "Contribution") cC++;
          else cF++;
        }
        setCountFull(cF);
        setCountContr(cC);
        setProjects(data);
        setBaseProjects(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const hangleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
    const prjs = baseprojects.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.employer.toLowerCase().includes(value.toLowerCase()) ||
        item.type.toLowerCase().includes(value.toLowerCase())
    );
    setProjects(prjs);
  };

  const categoryFilter = (key: string): void => {
    const prjs = baseprojects.filter((item) => item.type === key);
    setProjects(prjs);
    setShowClearFilter(true);
  };

  const hadleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const clearFilter = () => {
    setProjects(baseprojects);
    setShowClearFilter(false);
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
                  {t("All Projects", "project.allprojects")}{" "}
                </h4>
                <ul className="page-next custom bg-dark text-light d-inline-block py-2 px-4 mt-3 rounded mb-0">
                  <li>
                    <Link to="/" className="text-light">
                      RAILALA.COM
                    </Link>
                    <AiOutlineRight />
                  </li>
                  <li>
                    <span className="text-primary">
                      {" "}
                      {t("Projects", "header.projects")}
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
            <div className="col-lg-8 col-md-6 order-2 order-md-1">
              <div className="row">
                {projects.map((item) => (
                  <div key={item.id} className="col-lg-6 col-12 mb-4 pb-2">
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
                {projects.length === 0 && (
                  <div className="col-12">
                    <h3>
                      {t("No Result found for", "project.noresult")}: {search}
                    </h3>
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-4 mb-5 mt-sm-0 pt-2 pt-sm-0 order-1 order-md-2">
              <div className="sidebar sticky-sidebar">
                <div className="widget">
                  <div className="p-4 rounded shadow">
                    <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">
                      {t("Search", "project.search")}
                    </h6>
                    <div id="search2" className="widget-search mt-4 mb-0">
                      <form
                        onSubmit={hadleSubmit}
                        role="search"
                        id="searchform"
                        className="searchform"
                      >
                        <div className="inpt-search">
                          <input
                            type="text"
                            className="border rounded"
                            name="search"
                            placeholder={t(
                              "Search Keywords",
                              "project.searchkey"
                            )}
                            value={search}
                            onChange={hangleChange}
                          />
                          <BsSearch className="search-icon-btn" />
                          <input
                            type="submit"
                            id="searchsubmit"
                            value={t("Search", "project.search")}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="widget mt-4 pt-2">
                  <div className="p-4 rounded shadow">
                    <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">
                      {t("Work Category", "project.work")}
                    </h6>
                    <ul className="list-unstyled mt-4 mb-0 catagories">
                      <li
                        onClick={() => categoryFilter("Full Stack")}
                        className="d-flex justify-content-between categoryfilt"
                      >
                        <span>Full Stack</span> <span>{countFull}</span>
                      </li>
                      <li
                        onClick={() => categoryFilter("Contribution")}
                        className="d-flex justify-content-between categoryfilt"
                      >
                        <span>Contribution</span> <span>{countContr}</span>
                      </li>
                      {showClearFilter && (
                        <li
                          onClick={clearFilter}
                          className="d-flex justify-content-center"
                        >
                          <button className="btn btn-secondary btn-sm text-center">
                            {t("Clear", "project.clear")}
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Projects);
