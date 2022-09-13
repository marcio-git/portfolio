import styles from './Home.module.css';

export default function Home() {
  return (
    <section id='home' className={styles.one}>
      <div className={styles.main_text}>
        <h1>HI THERE</h1>
        <h2>I'm Marcio</h2>
        <h3>a Full Stack Web Developer</h3>
      <a target="_blank"  href='https://drive.google.com/file/d/1-83BP3JrQT6GBAJDQdAzEPAftjMVDH5f' className={styles.button_33} >Download CV</a>
      </div>
    </section>
  )
}