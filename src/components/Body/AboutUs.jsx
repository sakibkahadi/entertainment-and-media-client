

const AboutUs = () => {
    return (
        <div>
            <div>
            <h1 className="text-4xl font-bold text-black text-center mb-10">About Us</h1>
            <p className="text-gray-700 px-4 md:px-28">
            We are a team of dedicated writers, creatives, and industry experts who share a common love for storytelling in all its forms. Whether it's a gripping film, a chart-topping song, a compelling TV series, or a thought-provoking podcast, we believe in the power of media to inspire, entertain, and bring people together.
            </p>
            </div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 ">
                
                <img className="h-80 w-full rounded-2xl" src="https://i.ibb.co/FnJCvcn/5259888-20623.jpg" alt="" />
                <img className="h-80 w-full rounded-2xl" src="https://i.ibb.co/DDgc7nD/9649774-7350.jpg" alt="" />
                <img className="h-80 w-full rounded-2xl" src="https://i.ibb.co/vBK89nq/21532481-6463392.jpg" alt="" />
            </div>
        </div>
    );
};

export default AboutUs;