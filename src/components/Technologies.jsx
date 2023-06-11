import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Obs } from '../App';
import styles from './Techno.module.css';

const BoxItem = ({ icon, experience }) => {
  const [click, setClick] = useState(false)
  return (<>
    <div className={`${styles.box} ${styles.hidden}`}
      onClick={() => setClick(!click)}>
      <div className={`${click ? styles.clicked : styles.container}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className={`${styles.fas} ${styles.fa_bolt}`} id="content">
          <Icon icon={icon} />
        </span>
      </div>
      <p>Experience: {experience}</p>
    </div>
  </>
  )
}
export default function Technologies() {
  useEffect(() => Obs(styles.show, styles.hidden), [])

  return (
    <section id='techno' className={styles.three}>
      <div className={styles.main_text}>
        <h2>Technical Skills:</h2>
      </div>
      <div className={styles.table}>
        <BoxItem
          icon={"logos:html-5"}
          experience={'2 years'} />
        <BoxItem
          icon={"devicon:css3-wordmark"}
          experience={'2 years'} />
        <BoxItem
          icon={"vscode-icons:file-type-js-official"}
          experience={'2 years'} />
        <BoxItem
          icon={"devicon:jquery-wordmark"}
          experience={'1 year'} />
        <BoxItem
          icon={"devicon:react-wordmark"}
          experience={'1 year'} />
        <BoxItem
          icon={"logos:vitejs"}
          experience={'1 year'} />
        <BoxItem
          icon={"logos:nodejs"}
          experience={'6 months'} />
        <BoxItem
          icon={"devicon:express"}
          experience={'6 months'} />
        <BoxItem
          icon={"logos:axios"}
          experience={'6 months'} />
        <BoxItem
          icon={"logos:mysql"}
          experience={'1 year'} />
      </div>
    </section>
  )
}