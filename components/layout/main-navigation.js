import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./logo";
import classes from "./main-navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function MainNavigationBar() {
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
      <div className={classes.contactIcons}>
        {contactIcons.map(({ href, icon }) => (
          <a href={href} key={`${icon}-${href}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon className={classes.icon} icon={icon} inverse />
          </a>
        ))}
      </div>
      <nav>
        <ul>
          {menuItems.map(({ href, title }) => (
            <li key={title} className={classes.navItem}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
