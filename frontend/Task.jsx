import CheckButtons from './CheckButtons.jsx'
import './styles/Task.css'

const Task = ({ task }) => {
    const completedStyle = {
        color: 'green'
    }

    const notCompletedStyle = {
        color: 'red'
    }

    return (
        <>
            <li key={task.id} className='li'>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <br />
                <span style={task.completed === 0 ? notCompletedStyle : completedStyle}>
                    {task.completed === 0 ? 'No completada' : 'Completada'}
                </span>
                <br />
                <CheckButtons completed = {task.completed} id = {task.id}/>
            </li>
        </>
    )
}

export default Task