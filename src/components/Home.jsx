import { useEffect } from 'react';
import { Icon } from '@iconify/react';
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
      <a target="_blank" href='https://drive.google.com/file/d/1xbvsoEDE4DZMUaGlF8dTmldYCGzE24tZ/view?usp=sharing' className={`${styles.button_33} ${styles.hidden}`} >
        <Icon icon="heroicons-outline:document-download" inline={true} />
        Download CV</a>
      </div>
    </section>
  )
}