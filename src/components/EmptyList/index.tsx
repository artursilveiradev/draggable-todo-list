import clipboard from '@/assets/clipboard.svg'
import styles from './styles.module.css'

function EmptyList() {
	return (
		<div className={styles.container}>
			<img
				src={clipboard}
				alt={"This image contains a clipboard"}
				className={styles.icon}
			/>
			<p className={styles.description}>
				<span className={styles.descriptionTextBold}>
					Você ainda não tem tarefas cadastradas
				</span>
				<br />
				<span className={styles.descriptionText}>
					Crie tarefas e organize seus itens a fazer
				</span>
			</p>
		</div>
	)
}

export default EmptyList
