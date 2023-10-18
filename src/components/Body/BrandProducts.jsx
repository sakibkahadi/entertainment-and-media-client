import { useLoaderData, useParams } from "react-router-dom";

const BrandProducts = () => {
    const {brand} = useParams();
    const loadedData = useLoaderData()
    const products = loadedData.filter(product => product.brand === brand);
    console.log(products) 
    return (
        <div>
           <h2>Brand Name: {brand}</h2>
           
           {
            products.map(product=><p key={product._id}>{product.name}</p>)
           }
          
        </div>
    );
};

export default BrandProducts;