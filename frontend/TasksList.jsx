import Task from "./Task.jsx"
import './styles/TasksList.css'

const TasksList = ({ tasks }) => {

    return (
        <>
            <ul className="ul">
                {tasks.map(task => (
                    <Task key={task.id} task={task} />
                ))}
            </ul>
        </>
    )
}

export default TasksList
