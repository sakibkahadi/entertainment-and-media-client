import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";
import Slider from "./Slider";

const BrandProducts = () => {
    const { brand } = useParams();
    const loadedData = useLoaderData();
    const [advertisement, setAdvertisement] = useState([])
    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => setAdvertisement(data))
    }, [])
    const advertisements = advertisement.filter(add => add.brand === brand);
    console.log(advertisements)
    const products = loadedData.filter(product => product.brand === brand);
    console.log(products)

    return (
        <div>
            <h2>Brand Name: {brand}</h2>
            {/* slider */}
            <div>
                {advertisements.map(add=> <Slider key={add.brand} add={add}></Slider>)}
            </div>

            {/* Products */}

            <h1 className="text-5xl text-center">Products</h1>
            <div className={products.length > 0 ? "grid grid-cols-1 gap-5 md:grid-cols-2  lg:grid-cols-3" : "block"}>
                {
                    products.length > 0 ? products.map(product => <div key={product._id}><Product product={product}></Product></div>) 
                    
                    
                    
                    : <div className="   flex justify-center items-center"><div className="  "> currently No Products Available please add some products </div></div>
                }
            </div>


        </div>
    );
};

export default BrandProducts;