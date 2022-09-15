import { useEffect } from 'react';
import styles from './Techno.module.css';
import html_icon from '../assets/html_icon.png'
import css_icon from '../assets/css_icon.png'
import js_icon from '../assets/js_icon.png'
import jquery_icon from '../assets/jquery_icon.png'
import react_icon from '../assets/react_icon.png'
import node_icon from '../assets/node_icon.png'
import ex_icon from '../assets/ex_icon.png'
import axios_icon from '../assets/axios_icon.png'
import mysql_icon from '../assets/mysql_icon.png'

const BoxItem = ({item, img, experience}) => {
  return (
    <div className={`${styles.box} ${styles.hidden}`}>
      <p>{item}</p>
      <p>Experience: {experience}</p>
      <img src={img} alt="imagen" />
    </div>
  )
}
export default function Technologies() {

  useEffect(()=> {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        }
      })
    }) 
    const hiddenElements = document.querySelectorAll(`.${styles.hidden}`);
    hiddenElements.forEach(el => observer.observe(el))
  }, [])

  return (
    <section id='techno' className={styles.three}>
      <div className={styles.main_text}>
        <h2>My Abilities:</h2>
      </div>
      <div className={styles.table}>
        <BoxItem 
          item='HTML'
          img={html_icon}
          experience={'2 years'}/>
        <BoxItem 
          item='CSS'
          img={css_icon}
          experience={'2 years'}/>
        <BoxItem 
          item='JavaScript'
          img={js_icon}
          experience={'2 years'}/>
        <BoxItem 
          item='JQuery'
          img={jquery_icon}
          experience={'1 year'}/>
        <BoxItem 
          item='ReactJS'
          img={react_icon}
          experience={'1 year'}/>
        <BoxItem 
          item='NodeJS'
          img={node_icon}
          experience={'6 months'}/>
        <BoxItem 
          item='Express'
          img={ex_icon}
          experience={'6 months'}/>
        <BoxItem 
          item='Axios'
          img={axios_icon}
          experience={'6 months'}/>
        <BoxItem 
          item='MySQL'
          img={mysql_icon}
          experience={'1 year'}/>
      </div>
      {/* <div className={styles.table}>
      </div> */}
      {/* <img className={styles.main_image} src=''></img> */}
    </section>
  )
}