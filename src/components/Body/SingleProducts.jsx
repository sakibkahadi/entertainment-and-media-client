
import { useLoaderData, } from "react-router-dom";


const SingleProducts = () => {
    const loadedData = useLoaderData()
    
    const handleAddToCart = (e)=>{
        e.preventDefault();
        const data = loadedData;
        
        //post 
        fetch('http://localhost:5000/carts',{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)})
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }



    return (
        <div>
            <div className="card  lg:card-side bg-base-100 shadow-xl">
                <figure><img className="h-96 w-96" src={loadedData.photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{loadedData.productName}</h2>
                    <p>{loadedData.description}</p>
                    <form onSubmit={handleAddToCart}>
                        <div className="card-actions justify-end">
                            <button type="submit" className="btn btn-primary">Add to Cart</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;