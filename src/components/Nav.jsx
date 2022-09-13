import { useState } from "react";
import styles from "./Nav.module.css";

const MenuItem = ({open, ...rootDOMAttributes}) => {
  return (
    <div className={styles.menu}>
      MARCIO
      <div className={open ? styles.icon_close : styles.icon_open} 
      {...rootDOMAttributes}></div>
    </div>
  )
}

const NavItem = ({ item, link, isOpen, ...rootDOMAttributes }) => {
  return <li className={styles.nav_item} {...rootDOMAttributes}>
    <a href={link} className={styles.nav_link}>
      <span className={styles.link_text}>{item}</span>
    </a>
  </li>
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <ul className={isOpen ? styles.open : styles.navbar_nav}>
        <NavItem
          item={'HOME'}
          link={'#home'}
          onClick={() => setIsOpen(!isOpen)} />
        <NavItem
          item={'ABOUT ME'}
          link={'#about'}
          onClick={() => setIsOpen(!isOpen)} />
        <NavItem
          item={'TECHNOLOGIES'}
          link={'#techno'}
          onClick={() => setIsOpen(!isOpen)} />
        <NavItem
          item={'PORTFOLIO'}
          link={'#portfolio'}
          onClick={() => setIsOpen(!isOpen)} />
      </ul>
      <MenuItem 
        open={isOpen}
        onClick={() => setIsOpen(!isOpen)}/>
    </nav>
  )
}