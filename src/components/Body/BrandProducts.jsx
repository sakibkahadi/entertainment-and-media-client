import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";

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


            {/* Products */}
            <div >
                {
                    products.length > 0 ? <div>
                        <div>
                            {advertisements.map(add => <div key={add.brand}><img src={add.brand_photo} alt="" /></div>)}
                        </div>
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{products.map(product => <div key={product._id}><Product product={product}></Product></div>)}</div>
                    </div>



                        : <div className="  h-screen flex justify-center items-center"><div className="  "> currently No data Available </div></div>
                }
            </div>


        </div>
    );
};

export default BrandProducts;