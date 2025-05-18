import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {
  const [nuevaTarea, setnuevaTarea] = useState<string>("");

  const [listaTareas, setListaTareas] = useState<string[]>([]);

  //Agregar tarea
  const handleAddTask = () => {
    if (nuevaTarea.trim() === "") {
      alert("Por favor, ingresa una tarea.");
      return;
    }

    setListaTareas([...listaTareas, nuevaTarea]);
    setnuevaTarea("");
  };

  //Borrar tarea
  const handleBorrarTarea = (index: number) => {
    setListaTareas(tareas => tareas.filter((_,i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setnuevaTarea(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <ListaTareas
        listaTareas={listaTareas}
        borrarTarea={handleBorrarTarea}
      ></ListaTareas>
    </div>
  );
};
