
const Footer = () => {
    return (
        <footer className="lg:px-10 px-4 bg-gradient-low">
            <div className=" mx-auto">
                <div className="lg:flex flex-col gap-5 items-start justify-between">
                    {/* Logo  */}
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <div className="">
                            <svg className='h-12 w-12 lg:w-12 lg:h-12' viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 0C11.2167 0 0 11.2167 0 25C0 38.7833 11.2167 50 25 50C38.7833 50 50 38.7833 50 25C50 11.2167 38.7833 0 25 0ZM25 46.6667C13.05 46.6667 3.33333 36.95 3.33333 25C3.33333 13.05 13.05 3.33333 25 3.33333C36.95 3.33333 46.6667 13.05 46.6667 25C46.6667 36.95 36.95 46.6667 25 46.6667Z" fill="url(#paint0_linear_2_16)" />
                                <path d="M41.6667 22.5C40.75 22.5 40 23.25 40 24.1667V25.8333C40 26.75 40.75 27.5 41.6667 27.5C42.5834 27.5 43.3334 26.75 43.3334 25.8333V24.1667C43.3334 23.25 42.5834 22.5 41.6667 22.5ZM8.33335 22.5C7.41669 22.5 6.66669 23.25 6.66669 24.1667V25.8333C6.66669 26.75 7.41669 27.5 8.33335 27.5C9.25002 27.5 10 26.75 10 25.8333V24.1667C10 23.25 9.25002 22.5 8.33335 22.5Z" fill="url(#paint1_linear_2_16)" />
                                <path d="M25 27.6667L35.6333 22.8833L26.4 8.26666C25.7833 7.29999 24.2 7.29999 23.5833 8.26666L14.35 22.8833L24.9833 27.6667H25Z" fill="url(#paint2_linear_2_16)" />
                                <path d="M25.6833 31.0166C25.4667 31.1166 25.2333 31.1666 25 31.1666C24.7667 31.1666 24.5333 31.1166 24.3167 31.0166L13.8667 26.3167L23.6 41.7333C23.9 42.2167 24.4333 42.5166 25.0167 42.5166C25.6 42.5166 26.1167 42.2167 26.4333 41.7333L36.1667 26.3167L25.7167 31.0166H25.6833Z" fill="url(#paint3_linear_2_16)" />
                                <defs>
                                    <linearGradient id="paint0_linear_2_16" x1="0" y1="25" x2="50" y2="25" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#2572DB" />
                                        <stop offset="1" stopColor="#15BFBD" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2_16" x1="6.66669" y1="25" x2="43.3334" y2="25" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#2572DB" />
                                        <stop offset="1" stopColor="#15BFBD" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_2_16" x1="14.35" y1="17.6042" x2="35.6333" y2="17.6042" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#2572DB" />
                                        <stop offset="1" stopColor="#15BFBD" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_2_16" x1="13.8667" y1="34.4166" x2="36.1667" y2="34.4166" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#2572DB" />
                                        <stop offset="1" stopColor="#15BFBD" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>
                        <h2 className='lg:text-2xl text-2xl font-bold bg-gradient-to-r from-[#2572DB] to-[#15BFBD] bg-clip-text text-transparent'> Crypto Sphere</h2>
                    </div>
                    <div className="">
                        <div className="grid grid-cols-1 lg:gap-6 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                            <div className="p-4 flex flex-wrap flex-col items-center gap-2 lg:h-56">
                                <h3 className="text-white font-semibold">Quick Link</h3>
                                <a href="#" className="block mt-2 text-xs text-gray-100 hover:underline">Home</a>
                                <a href="#" className="block mt-2 text-xs text-gray-100 hover:underline">Features</a>
                                <a href="#" className="block mt-2 text-xs text-gray-100 hover:underline">About Us</a>
                                <a href="#" className="block mt-2 text-xs text-gray-100 hover:underline">Services</a>
                                <a href="#" className="block mt-2 text-xs text-gray-100 hover:underline">Testimonials</a>
                                <a href="#" className="block mt-2 text-xs text-gray-100 hover:underline">Pricing</a>
                                <a href="#" className="block mt-2 text-xs text-gray-100 hover:underline">FAQ</a>
                                <a href="#" className="block mt-2 text-xs text-gray-100 hover:underline">Contact</a>
                            </div>

                            <div className="p-4 flex flex-col  items-center gap-2">
                                <h3 className="text-white font-semibold">Legal</h3>
                                <a href="#" className="block mt-2 text-xs text-gray-100 hover:underline">Privacy Policy</a>
                                <a href="#" className="block mt-2 text-xs text-gray-100 hover:underline">Terms of Service</a>
                            </div>

                            <div className="p-4 flex flex-col  items-center gap-2">
                                <h3 className="text-white font-semibold">Contact Detail</h3>
                                <a href="#" className="block mt-2 text-xs text-gray-100 hover:underline">+1 (123) 456-7890</a>
                                <a href="#" className="block mt-2 text-xs text-gray-100 hover:underline">support@cryptosphere.com</a>
                                <a href="#" className="block mt-2 text-xs text-gray-100 hover:underline">123 Finance Avenue, Suite 456, TX 78901, USA</a>
                            </div>

                            <div className="p-4 flex flex-col items-center gap-2">
                                <h3 className="text-white font-semibold">Legal</h3>
                                <span className="block mt-2 text-xs text-gray-100 hover:underline">Twitter</span>
                                <span className="block mt-2 text-xs text-gray-100 hover:underline">Facebook</span>
                                <span className="block mt-2 text-xs text-gray-100 hover:underline">LinkedIn</span>
                                <span className="block mt-2 text-xs text-gray-100 hover:underline">Instagram</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-center text-gray-100 dark:text-gray-400 pt-16 pb-6">© 2024 Crypto Sphere Inc. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;