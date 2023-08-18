import './styles/Buttons.css'
import addIcon from './img/add.svg'

const Buttons = ({ handleOpenDialog }) => {
    return (
        <>
            <button
                onClick={handleOpenDialog}
                className='button'
            >
                AGREGAR NUEVA TAREA{'  '}
                <img src={addIcon} />
            </button>
        </>
    )
}

export default Buttons
