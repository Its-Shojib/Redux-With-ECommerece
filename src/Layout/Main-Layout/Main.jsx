import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="container min-h-screen px-4 mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;