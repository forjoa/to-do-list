import { useState } from 'react'
import deleteIcon from './img/delete.svg'
import completeIcon from './img/complete.svg'
import './styles/Buttons.css'
import './styles/CheckButtons.css'
import toast, { Toaster } from 'react-hot-toast'

const CheckButtons = ({ completed, id }) => {
    const [isCompleted, setIsCompleted] = useState(completed)

    const notifyDeleted = () => toast('Tarea eliminada correctamente', {
        duration: 1000,
        position: 'top-center',
        icon: '🗑️'
    })

    const notifyCompleted = () => toast('Felicidades, tarea completada!', {
        duration: 1000,
        position: 'top-center',
        icon: '✅'
    })

    const handleCompleteClick = async () => {
        try {
            const response = await fetch(`http://localhost:3000/update/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: true }),
            })

            if (response.ok) {
                setIsCompleted(true)
                notifyCompleted()

                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            } else {
                console.error('Error al completar la tarea');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    }

    const handleDeleteTask = async () => {
        try {
            const response = await fetch(`http://localhost:3000/delete/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
            })

            if (response.ok) {
                notifyDeleted()

                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            }
        } catch (error) {
            console.error('Error al enviar la solicitud de borrado', error)
        }
    }

    return (
        <div className='check-content'>
            <button
                className='button check delete'
                onClick={handleDeleteTask}
            >
                Eliminar
                <img src={deleteIcon} />
            </button>
            {!isCompleted && (
                <button 
                    className='button check complete' 
                    onClick={handleCompleteClick}
                >
                    Completado
                    <img src={completeIcon} />
                </button>
            )}
            <Toaster />
        </div>
    )
}

export default CheckButtons
