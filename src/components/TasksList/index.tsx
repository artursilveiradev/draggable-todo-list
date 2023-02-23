import { Reorder } from 'framer-motion'

import { ReactComponent as CheckedIcon } from '@/assets/checked.svg'
import { ReactComponent as UncheckedIcon } from '@/assets/unchecked.svg'
import { ReactComponent as TrashIcon } from '@/assets/trash.svg'
import styles from './styles.module.css'

interface Task {
	id: string
	description: string
	done: boolean
}

interface Props {
	tasks: Task[]
	onReorder: (newOrder: Task[]) => void
	onChangeTask: (task: Task) => void
	onRemoveTask: (task: Task) => void
}

function TasksList(props: Props) {
	const { tasks, onReorder, onChangeTask, onRemoveTask } = props

	return (
		<Reorder.Group
			axis="y"
			values={tasks}
			onReorder={onReorder}
			className={styles.list}
		>
			{tasks.map(task => (
				<Reorder.Item
					key={task.id}
					value={task}
					className={styles.listItem}
				>
					<label className={styles.checkbox}>
						<input
							type="checkbox"
							onChange={() => onChangeTask(task)}
							checked={task.done}
						/>
						{task.done ? <CheckedIcon /> : <UncheckedIcon />}
					</label>
					<p
						className={[
							styles.taskDescription,
							task.done ? styles.taskDescriptionDone : styles.taskDescriptionUndone
						].join(' ')}
					>
						{task.description}
					</p>
					<button onClick={() => onRemoveTask(task)} className={styles.button}>
						<TrashIcon />
					</button>
				</Reorder.Item>
			))}
		</Reorder.Group>
	)
}

export default TasksList
