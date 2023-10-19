
import { Link, useLoaderData,  } from "react-router-dom";
import Brands from "../../components/Body/Brands";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

const Home = () => {
    const loadedData = useLoaderData()
    
    const [brands, setBrands] = useState(loadedData);
    
    
    return (
        <div>
            {/* <Banner></Banner> */}
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    brands.map(b => 
                        <Link key={b.brand} to={`brands/${b.brand}`}>
                            <Brands b={b}></Brands>
                        </Link>
                    
                    )
                }
            </div>

            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;