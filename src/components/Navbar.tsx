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
import { Link } from "react-router-dom";

// import LOGO from "../../public/codnify-1.png"
const Navbar = () => {
  return (
    <>
      <header className="bg-amber-950 p-4 m-4 rounded-4xl">
          <div className=" flex justify-between">
            <div className="flex gap-4">
              <div>
                <FaBars />
              </div>
              <div className="flex gap-4">
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
            <div className="flex gap-4">
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
      </header>
    </>
  );
}

export default Navbar
