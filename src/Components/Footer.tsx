import React from "react";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

import { AppContext } from "../App";

const Footer = () => {
  const { t } = React.useContext(AppContext);

  return (
    <>
      <footer className="footer bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <Link to="/" className="footer-brand">
                RAILALA
              </Link>
              <p className="para-desc mx-auto mt-4">
                {t(
                  "You like what I do? Easy! Don't hesitate to drop a line via email or LinkedIn. If your colleagues might have an interest to my profile, don't hesitate to share my online portfolio with them.",
                  "footer"
                )}
              </p>
              <ul className="list-unstyled mb-0 mt-4 social-icon">
                <li className="list-inline-item mr-2">
                  <a
                    href="mailto:r3andrew@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    title="Email"
                  >
                    <AiFillMail />
                  </a>
                </li>
                <li className="list-inline-item mr-2">
                  <a
                    href="https://www.linkedin.com/in/railala-andriatsimarivo-b92570122"
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn Profile"
                  >
                    <AiFillLinkedin />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://github.com/cp3junior"
                    target="_blank"
                    rel="noreferrer"
                    title="Github Profile"
                  >
                    <AiFillGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-bar bg-dark">
        <div className="container text-foot text-center">
          <p className="mb-0">© 2022 RAILALA Andriatsimarivo.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
