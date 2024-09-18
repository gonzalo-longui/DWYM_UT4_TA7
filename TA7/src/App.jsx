import { useState } from 'react';
import { CircleX } from 'lucide-react';
import './App.css'

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const addTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim()) {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  }

  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  }

  return (
    <>
      <form onSubmit={addTarea}>
        <input type="text" className="taskInput" id="newTask" placeholder="Ingresa una tarea..." value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)}></input>
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index} className="taskCard">{tarea}
          <CircleX className="iconoEliminar" onClick={() => eliminarTarea(index)}/></li>
        ))}
      </ul>
    </>
  )
}

export default App
