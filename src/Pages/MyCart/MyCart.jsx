
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const MyCart = () => {
    const loadedData = useLoaderData();
    const [carts, setCarts] = useState(loadedData)


    const handleDelete = (id)=>{
        // make sure user is confirm to delete

        
        fetch(`http://localhost:5000/carts/${id}`,{
           method:"DELETE"
        })

        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount >0){
                console.log('deleted successfully')

                const remainingUsers = carts.filter(user=>user._id !==id);
                setCarts(remainingUsers)
            }
        })
        
    }

    return (
        <div className="overflow-x-auto">
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
                        carts.map(cart=><tr key={cart._id}>
                            
                            <td>{cart.productName}</td>
                            <td>{cart.type}</td>
                            <td>{cart.brand}</td>
                            <td><button onClick={()=>handleDelete(cart._id)} className="relative top-3" ><AiFillDelete></AiFillDelete></button></td>
                        </tr>)
                    }
                    
                    
                    
                </tbody>
            </table>
        </div>
    );
};

export default MyCart;