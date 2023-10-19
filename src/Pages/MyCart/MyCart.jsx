
import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const loadedData = useLoaderData();
    const [carts, myCarts] = useState(loadedData)

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        
                        <th>Product Name</th>
                        <th>Types</th>
                        <th>Brand</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carts.map(cart=><tr key={cart._id}>
                            
                            <td>{cart.productName}</td>
                            <td>{cart.type}</td>
                            <td>{cart.brand}</td>
                        </tr>)
                    }
                    
                    
                    
                </tbody>
            </table>
        </div>
    );
};

export default MyCart;