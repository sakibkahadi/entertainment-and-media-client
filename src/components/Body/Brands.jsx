




const Brands = ({ b }) => {
    const { brand, brand_photo } = b;




    return (
        <div>

            <div className="card card-compact bg-base-100 px-2">
                <figure><img className="w-full h-[300px]" src={brand_photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brand}</h2>
                    
                </div>
            </div>

        </div>
    );
};

export default Brands;