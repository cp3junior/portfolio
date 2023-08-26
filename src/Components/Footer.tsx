import { useContext } from "react";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

import { AppContext } from "../App";

const Footer = () => {
  const { t } = useContext(AppContext);

  return (
    <>
      <footer className="footer bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <Link to="/" className="footer-brand">
                RAILALA.COM
              </Link>
              <p className="para-desc mx-auto mt-4">
                {t(
                  "Do you find my resume appealing? Great! Don't hesitate to get in touch via email or LinkedIn. If you believe my profile could be intriguing to others, feel free to share it.",
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
                    href="https://www.linkedin.com/in/railala-andriatsimarivo"
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
          <p className="mb-0">© 2023 RAILALA Andriatsimarivo.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
