import { Icon } from '@iconify/react';
import styles from './Laptop3D.module.css';

const Laptop3D = () => {
  return (
    <>
      <div className={styles.macbook}>
        <div className={styles.inner}>
          <div className={styles.screen}>
            <div className={styles.face_one}>
              <div className={styles.camera}></div>
              <div className={styles.display}>
                <div className={styles.shade}></div>
              </div>
              <span>MacBook Air</span>
            </div>
            {/* <img src="http://www.clker.com/cliparts/i/s/H/f/4/T/apple-logo-white.svg" className={styles.logo} /> */}
            <Icon icon="mingcute:code-fill" className={styles.logo} />
          </div>
          <div className={styles.body}>
            <div className={styles.face_one}>
              <div className={styles.touchpad}>
              </div>
              <div className={styles.keyboard}>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={`${styles.key} ${styles.space}`}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={styles.key}></div>
                <div className={`${styles.key} ${styles.f}`}></div>
                <div className={`${styles.key} ${styles.f}`}></div>
                <div className={`${styles.key} ${styles.f}`}></div>
                <div className={`${styles.key} ${styles.f}`}></div>
                <div className={`${styles.key} ${styles.f}`}></div>
                <div className={`${styles.key} ${styles.f}`}></div>
                <div className={`${styles.key} ${styles.f}`}></div>
                <div className={`${styles.key} ${styles.f}`}></div>
                <div className={`${styles.key} ${styles.f}`}></div>
                <div className={`${styles.key} ${styles.f}`}></div>
                <div className={`${styles.key} ${styles.f}`}></div>
                <div className={`${styles.key} ${styles.f}`}></div>
                <div className={`${styles.key} ${styles.f}`}></div>
                <div className={`${styles.key} ${styles.f}`}></div>
                <div className={`${styles.key} ${styles.f}`}></div>
                <div className={`${styles.key} ${styles.f}`}></div>
              </div>
            </div>
            <div className={`${styles.pad} ${styles.one}`}></div>
            <div className={`${styles.pad} ${styles.two}`}></div>
            <div className={`${styles.pad} ${styles.three}`}></div>
            <div className={`${styles.pad} ${styles.four}`}></div>
          </div>
        </div>
        <div className={styles.shadow}></div>
      </div>
    </>
  )
}

export default Laptop3D