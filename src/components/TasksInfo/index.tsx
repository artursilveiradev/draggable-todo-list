import styles from './styles.module.css'

interface Props {
	tasksCreated: number
	tasksDone: number
}

function TasksInfo(props: Props) {
	const { tasksCreated, tasksDone } = props

	function parseBadgeText(value: number) {
		if (value <= 9) return `${value}`
		return '9+'
	}

	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<p className={[styles.infoText, styles.infoTextBlue].join(' ')}>
					Tarefas criadas
				</p>
				<div className={styles.infoBadge}>
					<span className={styles.infoBadgeText}>
						{parseBadgeText(tasksCreated)}
					</span>
				</div>
			</div>
			<div className={styles.info}>
				<p className={[styles.infoText, styles.infoTextPurple].join(' ')}>
					Concluídas
				</p>
				<div className={styles.infoBadge}>
					<span className={styles.infoBadgeText}>
						{parseBadgeText(tasksDone)}
					</span>
				</div>
			</div>
		</div>
	)
}

export default TasksInfo
