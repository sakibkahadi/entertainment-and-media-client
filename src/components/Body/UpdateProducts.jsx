import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const UpdateProducts = () => {
    const loadedData = useLoaderData()
    const [data, setData ] =useState(loadedData)
    console.log(data)
    const handleAddProduct = event =>{
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const productName = form.productName.value;
        const type = form.type.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const rating = form.rating.value;
        
        const product = { photo, productName, brand, type, price, rating };
    
        fetch(`http://localhost:5000/products/${data._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div className="card  shadow-2xl bg-base-100">
            <form onSubmit={handleAddProduct} className="card-body ">
                {/* first row  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" defaultValue={data?.photo} name="photo" placeholder="Photo Url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" defaultValue={data?.productName} name="productName" placeholder="Product Name" className="input input-bordered" required />
                    </div>
                </div>

                {/* 2nd row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <select name="brand" defaultValue={data?.brand} className="input input-bordered">
                            <option value="Disney">Disney</option>
                            <option value="Netflix">Netflix</option>
                            <option value="Warner Bros">Warner Brows</option>
                            <option value="Sony Picture">Sony Picture</option>
                            <option value="Amazon Prime">Amazon Prime</option>
                            <option value="Hoichoi">Hoichoi</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <input type="radio" name="type"  value="movie" />
                                <label className="label">Movie</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="type"   value="series" />
                                <label className="label">Web series</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="type"   value="shortFilm" />
                                <label className="label">Short Film</label>
                            </div>

                        </div>
                    </div>
                </div>
                {/* 3rd row */}
                <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" min={0} name="price" placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" min={0} name="rating" placeholder="Rating" className="input input-bordered" required />
                    </div>

                </div>
               
                <div>
                    <button type="submit" className="btn btn-error w-full">Submit</button>
                </div>


            </form>
        </div>
    );
};

export default UpdateProducts;