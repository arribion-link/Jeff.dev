import { FiSidebar } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { FaBlog } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router";

import LOGO from "../../public/codnify-1.png"

const Navbar = () => {
  const logo = {
    with: "100%",
    height: "auto",
    maxWidth: "6em",
    padding: "1em"
  }
  return (
    <>
      <header>
        <div className="navigation-container">
          <div className="static-navigation">
            <div className="logo-slider-toggle">
              <div>
                <FaBars />
              </div>
              <div>
                <Link to="">
                  <div title="Overview">
                    <FiSidebar />
                  </div>
                </Link>
                <Link to="">
                  <div title="Projects">
                    <FaCode />
                  </div>
                </Link>
                <Link to="">
                  <div title="Work">
                    <FaNetworkWired />
                  </div>
                </Link>
                <Link to=""> 
                  <div title="Certification">
                    <GrCertificate />
                  </div>
                </Link>
                <Link to="">
                  <div title="Skills">
                    <GiSkills />
                  </div>
                </Link>
                <Link to="">
                  <div title="Blog">
                   <FaBlog />
                  </div>
                </Link>
              </div>
            </div>
            <div className="nav-social-media-container">
              <Link to="/">
                <div>
                  <CiSquarePlus />
                </div>
              </Link>
              <div title="More">
                <FaGithub />
              </div>
              <div title="LinkedIn">
                <FaLinkedin />
              </div>
              <div title="Twitter(X)">
                <FaXTwitter />
              </div>
              <div title="LeetCode">
                <SiLeetcode />
              </div>
            </div>
          </div>
          <div className="navigation-slider">
            <div className="slider-header">
              <div>
                <img
                  src={LOGO}
                  alt=""
                  style={logo}
                />
             </div>
              <p>Jeff Mutethia</p>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="">Overview</a>
                </li>
                <li>
                  <a href="">Projects</a>
                </li>
                <li>
                  <a href="">Work</a>
                </li>
                <li>
                  <a href="">Certification</a>
                </li>
                <li>
                  <a href="">Skills</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar
