import Swal from "sweetalert2";
import Navbar from "../../components/Header/Navbar";
import { Link } from "react-router-dom";



const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const productName = form.productName.value;
        const type = form.type.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const product = { photo, productName, brand, type, price, rating, description };
        console.log(product)
        fetch('https://entertainment-and-media-server-78wiweyy8-sakibkahadis-projects.vercel.app/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                
                if(data.acknowledged){
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulation!!',
                        text: 'Successfully Added The product',
                        
                      })
                      form.reset()
                }
            })
    }
    return (
        <div>
            <h1 className="mt-12 mb-12 text-5xl text text-center text-black font-bold">Add products</h1>
            <div className="card  shadow-2xl bg-base-100">
            <form onSubmit={handleAddProduct} className="card-body ">
                {/* first row  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="productName" placeholder="Product Name" className="input input-bordered" required />
                    </div>
                </div>

                {/* 2nd row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <select name="brand" className="input input-bordered">
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
                                <input type="radio" name="type" value="movie" />
                                <label className="label">Movie</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="type" value="series" />
                                <label className="label">Web series</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="type" value="shortFilm" />
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
                {/* 4th row */}
                <div >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Short Description" className="input input-bordered" required />
                    </div>

                </div>
                <div className="mb-5">
                    <button type="submit" className="btn btn-error w-full mb-5">Add product</button>
                    <Link to="/"><button  className="btn btn-secondary w-full">Go Home</button></Link>
                </div>


            </form>
        </div>
        </div>
    );
};

export default AddProduct;