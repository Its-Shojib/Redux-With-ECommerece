import { useSelector } from "react-redux";


const Home = () => {
    let users = useSelector((state)=> state.users);
    console.log("users", users);
    return (
        <div>
            <p>Hi! I am Home </p>
        </div>
    );
};

export default Home;