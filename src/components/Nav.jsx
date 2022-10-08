import { useState } from "react";
import { Icon } from '@iconify/react';
import styles from "./Nav.module.css";

const MenuItem = ({open, ...rootDOMAttributes}) => {
  return (
    <div className={styles.menu}>
      MARCIO
      <Icon {...rootDOMAttributes} icon={open ?  "icon-park-outline:close" : 'simple-line-icons:menu'} />
    </div>
  )
}

const NavItem = ({ item, link, isOpen, ...rootDOMAttributes }) => {
  return (
    <li className={styles.nav_item} {...rootDOMAttributes}>
      <a href={link} className={styles.nav_link}>
        <span className={styles.link_text}>{item}</span>
      </a>
    </li>
  )
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <ul className={isOpen ? styles.open : styles.navbar_nav}>
        <NavItem
          item={'HOME'}
          link={'#home'}
          onClick={() => setIsOpen(false)} />
        <NavItem
          item={'ABOUT ME'}
          link={'#about'}
          onClick={() => setIsOpen(false)} />
        <NavItem
          item={'TECHNOLOGIES'}
          link={'#techno'}
          onClick={() => setIsOpen(false)} />
        <NavItem
          item={'PORTFOLIO'}
          link={'#portfolio'}
          onClick={() => setIsOpen(false)} />
      </ul>
      <MenuItem 
        open={isOpen}
        onClick={() => setIsOpen(!isOpen)}/>
    </nav>
  )
}