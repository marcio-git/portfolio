import { useEffect, useState } from 'react';
import { Obs } from '../App';
import styles from './Home.module.css';

export default function Home() {
  useEffect(() => Obs(styles.show, styles.hidden), [])

  return (
    <section id='home' className={styles.one}>
      <div className={styles.main_text}>
        <h1 className={styles.hidden}>HI THERE</h1>
        <h2 className={styles.hidden}>I'm Marcio</h2>
        <h3 className={styles.hidden}>a Full Stack Web Developer</h3>
      <a target="_blank" href='https://drive.google.com/file/d/1-83BP3JrQT6GBAJDQdAzEPAftjMVDH5f' className={`${styles.button_33} ${styles.hidden}`} >Download CV</a>
      </div>
    </section>
  )
}