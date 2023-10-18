import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Routes/AuthProvider";

const SignIn = () => {

    const { googleLogIn } = useContext(AuthContext)

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                console.log(result.user)
            })
            .then(err => { console.log(err) })
    }
    return (
        <div>
            <h2 className="text-sm md:text-xl text-center">Welcome Back. Please Login to your Account</h2>
            <div className="hero   ">
                <div className="w-full md:w-1/2">

                    <div className="card  ">
                        <div className="card-body ">
                            <form  >
                                <div className="grid grid-cols-2 gap-2">

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Type your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Type your Password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn  bg-gradient-to-r from-purple-600 rounded-3xl to-pink-500 text-white font-medium hover:bg-green-500" >Login Now</button>
                                </div>

                            </form>
                            <div className=" flex justify-center">
                                <button  onClick={handleGoogleLogIn }
                                 className="flex gap-3 items-center btn text-xl rounded-3xl mt-5 hover:bg-slate-100 font-normal bg-white text-black w-full" ><span></span> <span className=" ">Google</span></button>
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