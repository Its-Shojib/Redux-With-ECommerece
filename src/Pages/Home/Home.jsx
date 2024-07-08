import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { add_todo } from "../../Redux/actionTypes";
const Home = () => {
    let [newTodoText, setNewTodoText] = useState('');
    let dispatch = useDispatch();


    let handleAddTodo = (event) => {
        event.preventDefault();
        if(newTodoText == ''){
            return 0;
        }
        dispatch(add_todo(newTodoText));
        setNewTodoText('');
    }

    return (
        <div className="w-[800px] h-[600px] mx-auto">
            <h1 className="text-4xl text-center font-bold pt-10">My Todo App</h1>
            <div>
                <form 
                onSubmit={handleAddTodo} 
                className="flex gap-5 py-5">
                    <input 
                    type="text" 
                    name="todoText" 
                    className="border-none outline-none rounded-md text-black border-gray-400 py-1 flex-1 placeholder:pl-1" 
                    value={newTodoText}
                    onChange={(e)=> setNewTodoText(e.target.value)}
                    placeholder="Add a new todo..." />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-3 py-1 rounded-md">
                        <FaPlus /></button>
                </form>
            </div>
        </div>
    );
};

export default Home;