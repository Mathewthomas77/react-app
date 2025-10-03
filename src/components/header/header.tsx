import { FaLinkedin } from "react-icons/fa";
import ThemeSwitcher from "../1️⃣ ThemeSwitcher/1️⃣ ThemeSwitcher";
import { MenuConstant } from "../../routes/menu";
import { Link } from "react-router-dom";
import { VscGithubAlt } from "react-icons/vsc";
import "./Header.scss";  

function Header() {
  const menuList = MenuConstant;
  return (
    <header className="header">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left: Logo */}
        <div className="flex-shrink-0 logo-section color-brand-primary">
          <Link to={'/'}>
          <h1 className="text-theme font-bold text-xl text-brand">PG.</h1>
          </Link>
        </div>

        {/* Center: Navbar Links */}
        <nav className="hidden md:flex space-x-8">
          {menuList.map((menu:any, index:number) => (
            <Link key={index} to={'/'}> {menu.name} </Link>
          ))}
        </nav>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 items-center profile-links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithubAlt className="h-6 w-6 text-theme hover:text-brand" />
          </a>
          <a
            href="https://github.com/praveen-gorumuchu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-6 w-6 text-theme hover:text-brand" />
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
