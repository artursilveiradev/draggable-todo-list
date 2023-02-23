import { useState, ChangeEvent, KeyboardEvent } from 'react'

import { ReactComponent as PlusIcon } from '@/assets/plus.svg'
import styles from './styles.module.css'

interface Props {
	onAddTask: (taskDescription: string) => void
}

function NewTask(props: Props) {
	const { onAddTask } = props

	const [taskDescription, setTaskDescription] = useState('')

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const newTaskDescription = event.target.value
		setTaskDescription(newTaskDescription)
	}

	function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
		if (event.key !== 'Enter') return
		handleClick()
	}

	function handleClick() {
		if (
			taskDescription !== '' &&
			taskDescription.length >= 5 &&
			taskDescription.length <= 50
		) {
			onAddTask(taskDescription)
			setTaskDescription('')
		}
	}

	return (
		<div className={styles.container}>
			<input
				minLength={5}
				maxLength={50}
				placeholder="Adicione uma nova tarefa"
				className={styles.input}
				value={taskDescription}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			<button className={styles.button} onClick={handleClick}>
				<span className={styles.buttonText}>
					Criar
				</span>
				<PlusIcon />
			</button>
		</div>
	)
}

export default NewTask
