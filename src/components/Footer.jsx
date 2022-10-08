import { Icon } from '@iconify/react';
import styles from './Footer.module.css'

function Footer() {
	return <div id={styles.footer}>
		<div><p>© 2021 Marcio Huacacolqui</p></div>
		<div>marcio.dev.work@gmail.com</div>
		<div id={styles.contact}>
			<li>
				<Icon icon="ant-design:github-filled" color="white" />
				<a href='https://github.com/marcio-git' 
				target="_blank" 
				rel="noreferrer noopener">GitHub</a>
			</li>
			<li>
				<Icon icon="akar-icons:twitter-fill" color="white" />
				<a href='https://twitter.com/MarcioH_Dev' 
				target="_blank" 
				rel="noreferrer noopener">Twitter</a>
			</li>
			<li>
				<Icon icon="akar-icons:linkedin-box-fill" color="white" />
				<a href='https://www.linkedin.com/in/marcio-huacacolqui' 
				target="_blank" 
				rel="noreferrer noopener">LinkedIn</a>
			</li>
		</div>
	</div>
}

export default Footer;