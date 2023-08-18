import { useState } from 'react'
import './styles/Buttons.css'
import './styles/FormAddTask.css'
import toast, { Toaster } from 'react-hot-toast';

const FormAddTask = ({ handleCloseDialog }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const notify = () => toast('Tarea añadida correctamente', {
        duration: 1000,
        position: 'top-center',
        icon: '✅'
    })

    const handleTitleChange = (event) => {
        setTitle(event.target.value)    
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = { title, description }

        try {
            const response = await fetch("http://localhost:3000/insertar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                notify()

                setTimeout(() => {
                    handleCloseDialog()
                }, 1000)
            } else {
                console.error("Error al añadir la tarea")
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error)
        }
    }

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <h2>Añadir una tarea</h2>
                <label>Título de la tarea</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="input"
                    placeholder="Título"
                    onChange={handleTitleChange}
                />

                <label>Descripción de la tarea</label>
                <textarea
                    className='input'
                    placeholder="Descripción"
                    onChange={handleDescriptionChange}
                />

                <input
                    type="submit"
                    value="Añadir tarea"
                    className="button"
                />
            </form>
            <Toaster />
        </>
    )
}

export default FormAddTask
