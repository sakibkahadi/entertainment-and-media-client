import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto ">
            <div className="mb-12 mt-2"><Navbar></Navbar></div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;