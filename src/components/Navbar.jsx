
import Logo from "../assets/kevinRushLogo.png";
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';







const Navbar = () => {
  return (
    <nav className="  mb-20 flex items-center justify-between py-6">
        <div className=" flex flex-shrink-0 items-center ">
        <img className="mx-2 w-28 h-auto" src={Logo} alt="logo" />
        </div>

        <div className=" m-8 flex items-center justify-center gap-4 text-2xl">
        <a
        href="https://www.linkedin.com/in/pranav-bobade/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn">
        <FaLinkedin  /> 
        </a>
        <a href="https://github.com/mark-pranav"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub">
        <FaGithub />
        </a>
        <a href="https://www.instagram.com/mark_pranavv?igsh=eGF1ejJoaTduazBr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram">
           <FaInstagram />
        </a>
        <a
          href="https://wa.me/+918956909308"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp">
            <FaWhatsapp />
        </a>
           
        </div>
    </nav>
  )
}

export default Navbar
