import styles from './Footer.module.css'

function Footer() {
	return <div id={styles.footer}>
		<div><p>© 2021 Marcio Huacacolqui</p></div>
		<div>marcio.dev.work@gmail.com</div>
		<div id={styles.contact}>
			<li>
				<a href='https://github.com/marcio-git' 
				target="_blank" 
				rel="noreferrer noopener">GitHub</a>
			</li>
			<li>
				<a href='https://twitter.com/MarcioH_Dev' 
				target="_blank" 
				rel="noreferrer noopener">Twitter</a>
			</li>
		</div>
	</div>
}

export default Footer;