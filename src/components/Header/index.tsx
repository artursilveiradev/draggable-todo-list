import logo from '@/assets/logo.svg'
import styles from './styles.module.css'

function Header() {
	return (
		<header className={styles.header}>
			<img
				src={logo}
				alt={"This image contains a rocket with \"todo\" written next to it"}
				className={styles.logo}
			/>
		</header>
	)
}

export default Header
