
const Banner = () => {
    return (
        <div className="hero border border-black min-h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/QYT97c9/3d-glasses-movies-tickets-flat-lay.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold"> MediaMingle</h1>
                    <p className="mb-5"> Unveiling the World of Entertainment and Media</p>
                    <button className="btn btn-primary">Lets Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;