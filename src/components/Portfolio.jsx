import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Obs } from '../App';
import styles from './Portfolio.module.css';
import Img1 from '../assets/commerce.jpg';
import Img2 from '../assets/grupo.jpg';
import Img3 from '../assets/hotel.png';
import Img4 from '../assets/moleros.jpg';
import Img5 from '../assets/presupuesto.png';
import Img6 from '../assets/country-res.jpg';

const Boxes = ({ icon, img, title, description, list, link_repo, link_live }) => {
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
      {link_repo && <a href={link_repo} target="_blank" className={styles.button_33}>{'Repo'}</a>}
      {link_live && <a href={link_live} target="_blank" className={styles.button_33}>{'Live'}</a>}
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
          img={Img6}
          title={'Country Restaurant'}
          description={'Another cohorte I participated as a Frontend developer and my first project using Redux ⚛️. The proposed software consists of an e-commerce platform that provides a useful tool for current and future customers.'}
          list={['React', 'Styled Component', 'React-Router-Dom', 'Redux', 'MySQL', 'Maven', 'Docker']}
          link_repo={'https://github.com/No-Country/c9-20-javareact-fulltime/tree/frontend'} />
        <Boxes
          img={Img4}
          title={'Moleros · Servicios Integrales'}
          description={'This is a real landing page for a small cleaning company I recently built. I used Node, Express framework and NodeMailer module to send messages to the company email address just right from the page contact component.'}
          list={['React', 'Node', 'Express', 'NodeMailer', 'CSS Modules']}
          link_live={'https://moleros.com.ar'} />
        <Boxes
          img={Img1}
          title={'Coder-Commerce'}
          description={'An E-Commerce App where you will be able to buy clothes and technology. This project is part of CoderHouse.com Bootcamp. I used React JS as front-end and FireStore as DB and deployed on Vercel.'}
          list={['React', 'React-Router-Dom', 'ContextAPI', 'FireStore']}
          link_repo={'https://github.com/marcio-git/Coder-Commerce'}
          link_live={'https://commerce-house.vercel.app/'} />
        <Boxes
          img={Img2}
          title={'Grupo-20'}
          description={'An Fintech App. This is my first group project. It gave me the experience of working with others developers. I was in charge of the front-end development.'}
          list={['React', 'React-Dom', 'Expres', 'Styled Component', 'Axios', 'sweetalert2', 'Sequelize', 'React Chartjs 2', 'GitHub']}
          link_repo={'https://github.com/No-Country/C2-G20'} />
        <Boxes
          img={Img3}
          title={'Hotel-Menu'}
          description={'This challenge is made by Alkemy.org. An application to create a menu options card for a hotel that will consume an external API (spoonacular) and show different attributes of each dish and the menu.'}
          list={['React', 'React-Dom', 'Axios', 'sweetalert2', 'React-Bootstrap', 'CSS Modules']}
          link_repo={'https://github.com/marcio-git/hotel-menu'} />
        <Boxes
          img={Img5}
          title={'Calculo de Presupuesto'}
          description={'Just a small budget calculation app. In this app I used Chakra-UI for the styles and react-icons for icons.'}
          list={['React', 'Chakra-UI', 'react-icons']}
          link_repo={'https://github.com/marcio-git/calculadora-de-presupuesto'}
          link_live={'https://calculadora-de-presupuesto.vercel.app'}  />
      </div>
    </section>
    // src='https://kit8.net/wp-content/uploads/edd/2021/08/Composition-table-laptop_preview.jpg'
    // src='https://superscene.pro/images/objects/2x/52.png'
  )
}