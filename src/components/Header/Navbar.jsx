import {  useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";



const Navbar = () => {
    const [open, setOpen] = useState(false)
    

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink to='/login'>Log In</NavLink></li>

    </>
    
    return (



        <div className="navbar bg-base-100">
            <div className="navbar-start    ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden " onClick={() => setOpen(!open)}>
                        {
                            open === true ? <AiOutlineClose ></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                        }
                    </label>
                    <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 duration-1000 absolute 
            ${open ? '' : '-top-60'}`}>

                        {navLinks}
                    </ul>
                </div>
                <img className="w-1/2 rounded-2xl " src="https://i.ibb.co/Sc332H2/cover.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button>hi</button>
            </div>
        </div>
    );
};

export default Navbar;