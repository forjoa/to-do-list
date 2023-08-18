
import express from "express"
import cors from "cors"
import connection from "./connection.js"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

// mostrar todas las tareas
app.get("/tasks", (req, res) => {
  connection.query("SELECT * FROM tasks", (err, results) => {
    if (err) {
      console.error("hubo un error en la consulta")
      res.status(500).send("hubo un error en la consulta")
      return
    }

    res.json(results)
  })
})

// insertar nueva tarea
app.post("/insertar", (req, res) => {

  const { title, description } = req.body;

  const query = "INSERT INTO tasks (title, description, completed) VALUES (?, ?, false)";

  connection.query(query, [title, description], (err, result) => {
    if (err) {
      console.error("Error en el insert", err);
      res.status(500).send("Error al insertar la tarea");
      return;
    }

    console.log("Inserción exitosa", result);
    res.json({ message: "Tarea añadida exitosamente" });
  });
});

// marcar tarea como completa
app.put('/update/:id', (req, res) => {
  const taskId = req.params.id;

  const query = 'UPDATE tasks SET completed = ? WHERE id = ?';

  connection.query(query, [true, taskId], (err, result) => {
    if (err) {
      console.error('Error en la actualización', err);
      res.status(500).send('Error al actualizar la tarea');
      return;
    }

    console.log('Actualización exitosa', result);
    res.json({ message: 'Tarea actualizada exitosamente' });
  });
});

// eliminar tarea ya completada o no 
app.put('/delete/:id', (req,res) => {
  const taskId = req.params.id

  const query = 'DELETE FROM tasks WHERE id = ?'

  connection.query(query, taskId, (err, result) => {
    if (err) {
      console.error('Error al eliminar la tarea', err)
      res.status(500)
      return
    }

    console.log('Se ha eliminado correctamente', result)
    res.json({ message: 'La tarea ha sido eliminada' })
  })
})

app.listen(port, () => {
  console.log(`server listening in http://localhost:${port}`)
})
