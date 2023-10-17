
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/QYT97c9/3d-glasses-movies-tickets-flat-lay.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold"> MediaMingle</h1>
                    <p className="mb-5">MediaMingle is your ultimate destination for all things entertainment and media. Dive into the captivating realms of Disney, Netflix, Warner Bros., Sony Pictures, Spotify, Time Warner, and more, all in one place. Our website is your gateway to the latest news, exclusive content, and in-depth insights into the world's most renowned entertainment and media giants. Explore the magic of Disney, stream your favorite shows on Netflix, discover the cinematic excellence of Warner Bros., delve into the art of storytelling with Sony Pictures, and groove to the beats on Spotify. MediaMingle brings the stars, stories, and music of these industry titans right to your screen. Join us and immerse yourself in the ever-evolving world of entertainment and media.</p>
                    <button className="btn btn-primary"> Unveiling the World of Entertainment and Media</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;