import React from "react";
/* import { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext"; */
import { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";
function TaskCard({ task }) {
  /*  function mostrarAlerta() {
    alert(task.id);
  } */
  /*   const valor = useContext(PruebaContext);
  console.log(valor); */

  const { deleteTask } = useContext(PruebaContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
