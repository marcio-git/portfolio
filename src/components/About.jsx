import styles from './About.module.css';

export default function About() {
  return (
    <section id='about' className={styles.two}>
      <div className={styles.main_text}>
        <h2>About Me</h2>
        <p>I'm a Frontend and Backend Jr. developer based in Buenos Aires, Argentina.
          <br/>
          I’m currently learning React JS and TypeScript.
          <br/>
          I am constantly learning new technologies and development tools.
          Enjoy working with enthusiactic people who wants to solve problems through technology.
          <br/>
          If you think it could be the profile you are looking for, do not hesitate to contact me, I will be happy to talk with you.
        </p>
      </div>
      <img className={styles.main_image} src='https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/0bce1997425699.5ec4e91943701.jpg'></img>
    </section>
  )
}