
import { Link, useLoaderData, } from "react-router-dom";
import Brands from "../../components/Body/Brands";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import Banner from "../../components/Header/Banner";

const Home = () => {
    const loadedData = useLoaderData()

    const [brands, setBrands] = useState(loadedData);


    return (
        <div className="space-y-12">
            <Banner></Banner>
            <div>
                <div>
                    <h1 className="text-4xl mb-10 font-bold text-center">Category</h1>
                </div>
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        brands.map(b =>
                            <Link key={b.brand} to={`brands/${b.brand}`}>
                                <Brands b={b}></Brands>
                            </Link>

                        )
                    }
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;