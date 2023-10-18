
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Routes/AuthProvider";


const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    console.log(createUser)
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        // const info = { firstName, lastName, email, password };
        // console.log(info)

        //create user 

        createUser( email, password)
            .then(result => {
                console.log(result.user)
               
            })
            .catch((e) => {
                console.log(e)

            })

    }

    return (
        <div>
            <div className="space-y-5 mt-4 overflow-x-hidden ">
                <h1 className="text-4xl md:text-5xl font-bold  text-gray-500 text-center">Register</h1>
                <h2 className="text-sm md:text-xl text-center">Create your account. It's free and only takes a minute.</h2>
                <div className="hero   ">
                    <div className="w-full md:w-3/4">

                        <div className="card  shadow-2xl bg-base-100">
                            <form onSubmit={handleSignUp} className="card-body ">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">First Name</span>
                                        </label>
                                        <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Last Name</span>
                                        </label>
                                        <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn  bg-green-600 text-white font-medium hover:bg-green-500" >Register Now</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>



                <div className="text-center">
                    Already have an account? <span className="text-green-800"><Link to="/login"> Log in</Link></span>
                </div>
            </div>
        </div>
    );
};

export default SignUp;