import { Link } from "react-router-dom";



const Product = ({ product }) => {
    const { _id, photo, productName, brand, type, price, rating, description } = product;



    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className="w-full h-96" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-extrabold text-yellow-600">
                    {productName}

                </h2>
                <h3 className="text-fuchsia-600 font-bold">{brand}</h3>

                <div className="card-actions flex justify-between  ">
                    <div className=" bg-green-400 px-2 py-1 text-white rounded-lg font-semibold">Price: $ {price}</div>
                    <div className="bg-green-400 px-2 py-1 text-white rounded-lg font-normal"> {type}</div>

                </div>
                <div className="flex justify-center">
                <div className="bg-orange-700  text-white w-fit px-2 py-1 rounded-2xl"> IMDB Rating:  {rating}/10
                </div>
                </div>



                <Link to={`/details/${_id}`}><button className="btn btn-error w-full">Show Details</button></Link>
                <Link to={`/products/${_id}`}><button className="btn btn-success w-full">Update</button></Link>


            </div>
        </div>
    );
};

export default Product;