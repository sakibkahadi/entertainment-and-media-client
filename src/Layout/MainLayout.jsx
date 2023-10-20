import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import { useEffect, useState } from "react";


const MainLayout = () => {
    const [theme, setTheme] = useState(null)

    useEffect(()=>{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    },[])
    useEffect(()=>{
        if(theme === "dark"){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    },[theme])
    
const handleThemeSwitch =()=>{
    setTheme(theme=== "dark"? "light": "dark")
}

    return (
        <div className="max-w-6xl mx-auto ">
            <div className="mb-10"><Navbar handleThemeSwitch={handleThemeSwitch}></Navbar></div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;