import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="container min-h-screen mx-auto bg-[#031b23] text-white">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;