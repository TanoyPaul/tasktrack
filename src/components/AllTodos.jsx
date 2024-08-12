import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo, toggleComplete } from "../features/todoSlice";
import { PiTrashSimple } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { VscSave } from "react-icons/vsc";

const AllTodos = () => {
  const allTodos = useSelector((state) => state.todo.todos);
  console.log(allTodos);

  useEffect(
    () => localStorage.setItem("todoList", JSON.stringify(allTodos))
  )
  /* 
  the initialState -> state, name of the reducer -> todo, the array of todos -> todos.
  It is the case where there is an object of reducers as name and reducers as key-value pairs.
  */
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (todo) => {
    dispatch(editTodo({ ...todo, newText: editText }));
    console.log(editText);

    setEditingId(null); // Sets the id to null so that the the button of edit appears again and the id turns into it's initial state that was null.
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <>
      <ul className="border border-slate-400 rounded-md p-2 flex flex-col gap-3">
        {allTodos.map((todo) => (
          <li
            key={todo.id}
            className={`px-6 py-2 w-full text-white border border-slate-100 ${
              todo.completed ? "bg-green-300" : "bg-slate-800"
            } flex justify-between items-center md:gap-6`}
          >
            <div className="flex gap-3 items-center w-1/2">
              <input
                type="checkbox"
                name="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              {/* <h2 className="text-xl">{todo.text}</h2> */}
              <input
                type="text"
                name="text"
                id=""
                className={`bg-transparent border-none outline-none ${
                  todo.completed ? "line-through text-black" : ""
                }`}
                value={editingId === todo.id ? editText : todo.text}
                onChange={(e) => setEditText(e.target.value)}
                readOnly={editingId !== todo.id}
              />
            </div>
            <div className="flex gap-2 md:gap-4 w-1/2 justify-end">
              {editingId === todo.id ? (
                <button
                  className="rounded-full bg-yellow-600 hover:bg-yellow-700 px-3  md:px-5 py-2"
                  onClick={() => handleSave(todo)}
                >
                  <VscSave className="font-bold text-xl" />
                </button>
              ) : (
                <button
                  className="rounded-full bg-green-600 hover:bg-green-700 px-3 md:px-5 py-2"
                  onClick={() => handleEdit(todo)}
                >
                  <CiEdit className="font-bold text-xl" />
                </button>
              )}
              <button
                className="rounded-full bg-rose-600 hover:bg-rose-700 px-3 md:px-5 py-2"
                onClick={() => {
                  handleDelete(todo.id);
                }}
              >
                <PiTrashSimple className="font-bold text-xl" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllTodos;
