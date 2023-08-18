import { useState, useEffect } from "react"
import './styles/App.css'
import listIcon from './img/list.svg'
import TasksList from "./TasksList.jsx"
import Buttons from "./Buttons.jsx"
import FormAddTask from "./FormAddTask.jsx"
import Footer from "./Footer"

const App = () => {
  const [data, setData] = useState([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
      .catch(error => {
        console.error("Error fetching data:", error)
      })
  }, [])

  const handleOpenDialog = () => {
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    window.location.reload()
  }

  return (
    <div className="container">
      <h1><img src={listIcon}/> To-Do List: </h1>
      <Buttons handleOpenDialog={handleOpenDialog} />
      <TasksList tasks={data} />
      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <span className="close-button" onClick={handleCloseDialog}>
              &times;
            </span>
            <FormAddTask handleCloseDialog={handleCloseDialog}/>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default App
