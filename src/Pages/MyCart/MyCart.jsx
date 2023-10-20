
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const MyCart = () => {
    const loadedData = useLoaderData();
    const [carts, setCarts] = useState(loadedData)


    const handleDelete = (id) => {
        // make sure user is confirm to delete


        fetch(`http://localhost:5000/carts/${id}`, {
            method: "DELETE"
        })

            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulation',
                        text: 'Successfully Deleted From Cart ',

                    })

                    //remove the user from ui
                    const remainingUsers = carts.filter(user => user._id !== id);
                    setCarts(remainingUsers)
                }
            })

    }

    return (
        <div>
            <h1 className="text-5xl text-black font-bold mb-10 mt-12 text-center">My Cart</h1>
            <div className="overflow-x-auto mb-12">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Product Name</th>
                            <th>Types</th>
                            <th>Brand</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map(cart => <tr key={cart._id}>

                                <td>{cart.productName}</td>
                                <td>{cart.type}</td>
                                <td>{cart.brand}</td>
                                <td><button onClick={() => handleDelete(cart._id)} className="relative top-3" ><AiFillDelete></AiFillDelete></button></td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
            <Link to="/"><button className="btn btn-secondary w-full">Go Home</button></Link>
        </div>
    );
};

export default MyCart;