
const About = () => {
    return (
        <section className=" body-font ">
            <div className="container lg:px-10 px-4 py-10 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <img alt="feature" className="object-cover object-center h-full w-full" src="https://i.ibb.co.com/YTjJ7rD/image.png" />
                </div>
                <div className="flex flex-col flex-wrap lg:py-6 lg:w-1/2 lg:pl-5 lg:text-left text-center">
                    <h1 className="text-[48px] font-bold ">
                        About Crypto Sphere
                    </h1>
                    <div className="flex gap-3 flex-col">
                        <p className="">Who We Are and Our Mission to Transform the Crypto Landscape</p>
                        <p className="">At Crypto Sphere, we are passionate about revolutionizing the world of finance through the power of cryptocurrency and blockchain technology. Established with a vision to empower individuals and businesses alike, we strive to make the complex world of digital currencies accessible to everyone.</p>
                        <p className="">Our team is composed of seasoned professionals with deep expertise in the fields of finance, technology, and cybersecurity. We are dedicated to providing our users with a secure, user-friendly platform that simplifies the process of buying, selling, and managing cryptocurrencies.</p>
                        <p className="">To lead the charge in the global adoption of cryptocurrency by providing innovative solutions that are secure, transparent, and easy to use.</p>
                    </div>
                    <button className="text-[16px] font-bold bg-gradient-to-r from-[#2572DB] to-[#15BFBD] rounded-full px-4 py-2 w-1/3 my-5">
                        Read More
                    </button>
                </div>

            </div>
        </section>
    );
};

export default About;