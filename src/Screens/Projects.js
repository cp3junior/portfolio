import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { BsTags, BsPerson, BsSearch } from "react-icons/bs";

import _projects from "./../Assets/project.json";
import { AppContext } from "./../App";

const Projects = () => {
  const [countFull, setCountFull] = useState(0);
  const [countContr, setCountContr] = useState(0);
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [showClearFilter, setShowClearFilter] = useState(false);

  const { t, language } = React.useContext(AppContext);

  useEffect(() => {
    let cF = 0,
      cC = 0;
    for (let i = 0; i < _projects.length; i++) {
      const el = _projects[i];
      if (el.type === "Contribution") cC++;
      else cF++;
    }
    setCountFull(cF);
    setCountContr(cC);
    setProjects(_projects);
  }, []);

  const hangleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    const prjs = _projects.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.employer.toLowerCase().includes(value.toLowerCase()) ||
        item.type.toLowerCase().includes(value.toLowerCase())
    );
    setProjects(prjs);
  };

  const categoryFilter = (key) => {
    const prjs = _projects.filter((item) => item.type === key);
    setProjects(prjs);
    setShowClearFilter(true);
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
  };

  const clearFilter = () => {
    setProjects(_projects);
    setShowClearFilter(false);
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
                  {t("All Projects", "project.allprojects")}{" "}
                </h4>
                <ul className="page-next custom bg-dark text-light d-inline-block py-2 px-4 mt-3 rounded mb-0">
                  <li>
                    <Link to="/" className="text-light">
                      RAILALA
                    </Link>
                  </li>
                  <AiOutlineRight />
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
            <div className="col-lg-8 col-md-6">
              <div className="row">
                {projects.map((item, i) => (
                  <div key={i} className="col-lg-6 col-12 mb-4 pb-2">
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
                {projects.length === 0 && (
                  <div className="col-12">
                    <h3>
                      {t("No Result found for", "project.noresult")}: {search}
                    </h3>
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
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

export default Projects;
