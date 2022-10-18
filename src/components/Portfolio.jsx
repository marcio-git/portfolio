import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Obs } from '../App';
import styles from './Portfolio.module.css';
import Img1 from '../assets/commerce.jpg';
import Img2 from '../assets/grupo.jpg';
import Img3 from '../assets/hotel.png';
import Img4 from '../assets/moleros.jpg';

const Boxes = ({ icon, img, title, description, list, link, link_name }) => {
  return (
    <div className={`${styles.box} ${styles.hidden}`}>
      <div className={styles.box_img}>
        <Icon icon={icon} color="yellow" />
        <img src={img} alt="" className={styles.img}></img>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.technologies_list}>
        {list.map(i => (
          <span key={i} className={styles.technologies_span}>{i}</span>
        ))}
      </div>
      <a href={link} target="_blank" className={styles.button_33}>{link_name || 'Repo'}</a>
    </div>
  )
}
export default function Portfolio() {
  useEffect(() => Obs(styles.show, styles.hidden), [])

  return (
    <section id='portfolio' className={styles.four}>
      <div className={styles.main_text}>
        <h2>Portfolio</h2>
      </div>
      <div className={styles.table}>
        <Boxes
          icon={"clarity:new-solid"}
          img={Img4}
          title={'Moleros · Servicios Integrales'}
          description={'This is a real landing page for a small cleaning company I recently built. I used Node, Express framework and NodeMailer module to send messages to the company email address just right from the page contact component.'}
          list={['React', 'Node', 'Express', 'NodeMailer', 'CSS Modules']}
          link={'https://moleros.com.ar'}
          link_name={'Live'} />
        <Boxes
          img={Img1}
          title={'Coder-Commerce'}
          description={'An E-Commerce App where you will be able to buy clothes and technology. This project is part of CoderHouse.com Bootcamp. I used React JS as front-end and FireStore as DB and deployed on Vercel.'}
          list={['React', 'React-Dom', 'ContextAPI', 'FireStore']}
          link={'https://github.com/marcio-git/Coder-Commerce'} />
        <Boxes
          img={Img2}
          title={'Grupo-20'}
          description={'An Fintech App. This is my first group project. It gave me the experience of working with others developers. I was in charge of the front-end development.'}
          list={['React', 'React-Dom', 'Expres', 'Styled Component', 'Axios', 'sweetalert2', 'Sequelize', 'React Chartjs 2', 'GitHub']}
          link={'https://github.com/No-Country/C2-G20'} />
        <Boxes
          img={Img3}
          title={'Hotel-Menu'}
          description={'This challenge is made by Alkemy.org. An application to create a menu options card for a hotel that will consume an external API (spoonacular) and show different attributes of each dish and the menu.'}
          list={['React', 'React-Dom', 'Axios', 'sweetalert2', 'React-Bootstrap', 'CSS Modules']}
          link={'https://github.com/marcio-git/hotel-menu'} />
      </div>
    </section>
    // src='https://kit8.net/wp-content/uploads/edd/2021/08/Composition-table-laptop_preview.jpg'
    // src='https://superscene.pro/images/objects/2x/52.png'
  )
}