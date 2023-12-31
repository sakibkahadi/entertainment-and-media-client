import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Routes/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const authInfo = useContext(AuthContext);
    const { login, googleSignIn } = authInfo;
    const location = useLocation();
    const navigate = useNavigate();



    const handleLogin = e => {
        e.preventDefault();
        
        login(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state? location.state : '/')
            })
            .catch(() => {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please enter valid email or password',
                    
                  })
            })

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate(location?.state? location.state : '/')
            })
            .catch((error) => console.log(error))
    }


    return (
        <div className="space-y-5 mt-5 overflow-x-hidden">

            <h2 className="text-sm md:text-xl text-center mt-12">Welcome Back. Please Login to your Account</h2>
            <div className="hero   ">
                <div className="w-full md:w-1/2">

                    <div className="card  ">
                        <div className="card-body ">
                            <form onSubmit={handleLogin} >
                                <div className="grid grid-cols-2 gap-2">

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Type your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Type your Password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn  bg-gradient-to-r from-purple-600 rounded-3xl to-pink-500 text-white font-medium hover:bg-green-500" >Login Now</button>
                                </div>

                            </form>
                            <div className=" flex justify-center">
                                <button className="flex gap-3 items-center btn text-xl rounded-3xl mt-5 hover:bg-slate-100 font-normal bg-white text-black w-full" onClick={handleGoogleSignIn}><span><FcGoogle /></span> <span className=" ">Google</span></button>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
            <div className="text-center">
                Don't you have an account? <span className="text-blue-500"><Link to="/register">Sign up</Link></span>
            </div>
            

        </div>
    );
};

export default SignIn;