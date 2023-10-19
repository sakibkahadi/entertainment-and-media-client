import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";
import Slider from "./Slider";

const BrandProducts = () => {
    const loadedData = useLoaderData();
    const { brand } = useParams();
    const [advertisement, setAdvertisement] = useState([]);
    const [productsData, setProductsData] = useState([]);

    useEffect(()=>{
        const brandsDetails = loadedData.find(add=>add.brand===brand);
        setAdvertisement(brandsDetails)
    },[loadedData, brand])

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProductsData(data))
    },[])




    const { advertisement1, advertisement2, advertisement3 } = advertisement;
     const products = productsData.filter(product => product.brand === brand);
    

    return (
        <div>
            <h2>Brand Name: {brand}</h2> 
            {/* slider */}
            <div>
            

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={advertisement1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={advertisement2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={advertisement3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
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