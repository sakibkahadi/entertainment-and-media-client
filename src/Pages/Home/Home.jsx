
import { Link, useLoaderData, } from "react-router-dom";
import Brands from "../../components/Body/Brands";
import Footer from "../../components/Footer/Footer";

import Banner from "../../components/Header/Banner";
import ChooseUs from "../../components/Body/ChooseUs";
import AboutUs from "../../components/Body/AboutUs";


const Home = () => {
    const loadedData = useLoaderData()
    


    return (
        <div className="space-y-12 dark:bg-black">
            
            
            <Banner></Banner>
            <div>
                <div>
                    <h1 className="text-4xl mb-10 font-bold text-center">Our Trusted Brands</h1>
                </div>
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        loadedData.map(b =>
                            <Link key={b.brand} to={`brands/${b.brand}`}>
                                <Brands b={b}></Brands>
                            </Link>

                        )
                    }
                </div>
            </div>
            <ChooseUs></ChooseUs>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;