import { PropsWithChildren } from 'react'

import styles from './styles.module.css'

function Container(props: PropsWithChildren) {
	const { children } = props

	return (
		<div className={styles.container}>
			{children}
		</div>
	)
}

export default Container
