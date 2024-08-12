import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { IoAddSharp } from "react-icons/io5";


function InputBox() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    const inputText = inputRef.current.value.trim();    
    if (inputText !== "") {
      dispatch(addTodo(inputText)); // dispatch uses (here addTodo()) reducers to update the state in store
      inputRef.current.value = "";
    }
  };
  return (
    <>
      <div className="flex justify-center items-center my-4 md:gap-16 gap-4">
        <div className="w-[80%] md:w-[50%]">
          <input
            type="search"
            placeholder="Add your tasks here ..."
            ref={inputRef}
            className="w-full px-6 py-2 rounded-md outline-none border-none"
          />
        </div>
        <button onClick={addTodoHandler} className="bg-blue-600 hover:bg-blue-700 rounded-full text-white px-6 py-2">
        <IoAddSharp  className="font-bold text-xl"/>

        </button>
      </div>
    </>
  );
}

export default InputBox;
