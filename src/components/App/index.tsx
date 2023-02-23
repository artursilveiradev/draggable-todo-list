import { Fragment, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Header from '@/components/Header'
import Container from '@/components/Container'
import NewTask from '@/components/NewTask'
import TasksInfo from '@/components/TasksInfo'
import EmptyList from '@/components/EmptyList'
import TasksList from '@/components/TasksList'

interface Task {
	id: string
	description: string
	done: boolean
}

function App() {
	const [tasks, setTasks] = useState<Task[]>([])

	useEffect(() => {
		const storedTasks = localStorage.getItem('tasks')
		if (storedTasks !== null) {
			setTasks(JSON.parse(storedTasks))
		}
	}, [])

	function handleAddTask(taskDescription: string) {
		const newTask = {
			id: uuidv4(),
			description: taskDescription,
			done: false
		}
		const updatedTaskList = [...tasks, newTask]
		localStorage.setItem('tasks', JSON.stringify(updatedTaskList))
		setTasks(updatedTaskList)
	}

	function handleChangeTask(task: Task) {
		const updatedTaskList = tasks.map(t => {
			if (t.id === task.id) {
				return {
					...task,
					done: !task.done
				}
			}
			return t
		})
		localStorage.setItem('tasks', JSON.stringify(updatedTaskList))
		setTasks(updatedTaskList)
	}

	function handleRemoveTask(task: Task) {
		const updatedTaskList = tasks.filter(t => t.id !== task.id)
		localStorage.setItem('tasks', JSON.stringify(updatedTaskList))
		setTasks(updatedTaskList)
	}

	function handleReorder(newOrder: Task[]) {
		localStorage.setItem('tasks', JSON.stringify(newOrder))
		setTasks(newOrder)
	}

	const tasksCreated = tasks.length

	const tasksDone = tasks.filter(t => t.done === true).length

  return (
    <Fragment>
			<Header />
			<Container>
				<NewTask onAddTask={handleAddTask} />
				<TasksInfo tasksCreated={tasksCreated} tasksDone={tasksDone} />
				{!!tasks.length ? (
					<TasksList
						tasks={tasks}
						onReorder={handleReorder}
						onChangeTask={handleChangeTask}
						onRemoveTask={handleRemoveTask}
					/> 
				) : <EmptyList />}
			</Container>
    </Fragment>
  )
}

export default App
