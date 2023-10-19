import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from "../../Routes/AuthProvider";



const Navbar = () => {
    const authInfo = useContext(AuthContext);
    const { user, logOut } = authInfo;
    const [open, setOpen] = useState(false)
    

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {user && <div className="lg:flex"><span><li><NavLink to='/addProduct'>Add Product</NavLink></li></span>
        <span> <li><NavLink to='/myCart'>My Cart</NavLink></li></span></div>
       }
        
        
        <li><NavLink to='/login'>Log In</NavLink></li>

    </>
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
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
                <a className=" normal-case text-xl md:text-2xl  lg:text-4xl ">Media Mingle</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="">
                    {user && <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn m-1">profile</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                            <div className="card w-full ">
                                <div className="card-body space-y-2">
                                    <div className="flex justify-center">

                                        {
                                            user.photoURL && <img className="h-20 w-20 rounded-full " src={user.photoURL} alt="profile pic" />

                                        }
                                    </div>
                                    <p>{ user.displayName}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-success" onClick={handleLogOut}>LogOut</button>
                                    </div>
                                </div>
                            </div>

                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    );
};
export default Navbar;