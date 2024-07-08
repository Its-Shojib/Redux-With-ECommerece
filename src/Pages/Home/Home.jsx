
const Home = () => {

    let handleAddTodo = (e) =>{
        e.priventDefault();
        console.log(e);
    }

    return (
        <div className="w-[800px] h-[600px] mx-auto">
            <h1 className="text-4xl text-center font-bold pt-10">My Todo App</h1>
            <div>
                <form onSubmit={()=> handleAddTodo()} className="flex gap-5 py-5">
                    <input type="text" className="border-none outline-none rounded-md text-black border-gray-400 py-1 flex-1 placeholder:pl-1" placeholder="Add a new todo..." />
                    <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-md">+</button>
                </form>
            </div>
        </div>
    );
};

export default Home;