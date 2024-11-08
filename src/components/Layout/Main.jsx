import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Main = () => {
    return (
        <div className="w-11/12 mx-auto  justify-center flex items-center mt-10 gap-5">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;