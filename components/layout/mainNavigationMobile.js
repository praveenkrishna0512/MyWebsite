import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./logo";
import classes from "./mainNavigationMobile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function toggleNav() {
  const currentHeight = document.getElementById("myNav").style.height;
  if (currentHeight == "90vh") {
    document.getElementById("myNav").style.height = "0vh";
  } else {
    document.getElementById("myNav").style.height = "90vh";
  }
}

export default function MainNavigationBarMobile() {
  const router = useRouter();

  const menuItems = [
    {
      href: "/",
      title: "Home",
    },
    // {
    //   href: "/about",
    //   title: "About",
    // },
    {
      href: "/blog",
      title: "Blog",
    },
    // {
    //   href: "/experiences",
    //   title: "Experiences",
    // },
    {
      href: "/resume.pdf",
      title: "Resume",
    },
    // {
    //   href: "/contact",
    //   title: "Contacts",
    // },
  ];

  const contactIcons = [
    {
      href: "https://www.linkedin.com/in/pk0512/",
      icon: faLinkedin,
    },
    {
      href: "https://www.instagram.com/pravedino/",
      icon: faInstagram,
    },
    {
      href: "https://github.com/praveenkrishna0512",
      icon: faGithub,
    },
    {
      href: "mailto:praveenkrishna0512@gmail.com",
      icon: faEnvelope,
    },
  ];

  return (
    <div className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav id="myNav" className={classes.overlay}>
        <ul>
          {menuItems.map(({ href, title }) => (
            <li key={title} className={classes.navItem}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
        <div className={classes.contactIcons}>
          {contactIcons.map(({ href, icon }) => (
            <a href={href} key={icon} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className={classes.icon} icon={icon} inverse />
            </a>
          ))}
        </div>
      </nav>
      <span onClick={toggleNav}>
        <FontAwesomeIcon className={classes.hamburger} icon={faBars} inverse />
      </span>
    </div>
  );
}
