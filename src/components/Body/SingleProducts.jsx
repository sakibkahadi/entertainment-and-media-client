
import { useLoaderData, } from "react-router-dom";


const SingleProducts = () => {
    const loadedData = useLoaderData()



    return (
        <div>
            <div className="card  lg:card-side bg-base-100 shadow-xl">
                <figure><img  className="h-96 w-96" src={loadedData.photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{loadedData.productName}</h2>
                    <p>{loadedData.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;