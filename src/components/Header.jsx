import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaBtc, FaEthereum, FaDollarSign } from 'react-icons/fa';

const options = [
    { value: 'btc', label: 'BTC', icon: <FaBtc /> },
    { value: 'eth', label: 'ETH', icon: <FaEthereum /> },
    { value: 'usd', label: 'USD', icon: <FaDollarSign /> },
];

const Navbar = () => {
    const [nav, setNav] = useState(false);

    // Toggle navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Features' },
        { id: 3, text: 'About' },
        { id: 4, text: 'Services' },
        { id: 5, text: 'Testimonials' },
        { id: 6, text: 'Pricing' },
        { id: 6, text: 'FAQ' },
        { id: 6, text: 'Contact' },

    ];


    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };


    return (
        <div className="bg-gradient-low">
            {/* Navbar Section Start  */}
            <div className=' flex justify-between items-center h-20 max-w-full mx-auto lg:px-10 px-4 text-white '>

                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block lg:hidden '>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
                {/* Logo */}
                <div className='flex flex-row justify-center items-center gap-2'>
                    <div className="">
                        <svg className='h-7 w-7 lg:w-12 lg:h-12' viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <h2 className='lg:text-2xl text-lg font-bold bg-gradient-to-r from-[#2572DB] to-[#15BFBD] bg-clip-text text-transparent'> Crypto Sphere</h2>
                </div>
                {/* Desktop Navigation */}
                <div className="flex justify-between items-center gap-10">
                    <ul className='hidden lg:flex flex-col gap-6 lg:flex-row'>
                        {navItems.map(item => (
                            <li
                                key={item.id}
                                className=' hover:text-[#15BFBD]  text-[14px] hover:font-bold cursor-pointer '
                            >
                                {item.text}
                            </li>
                        ))}
                    </ul>
                    <button className='text-[16px] font-bold bg-gradient-to-r from-[#2572DB] to-[#15BFBD] rounded-full px-3 py-1'>Sign Up</button>
                </div>


                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed lg:hidden mt-20 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#090E26] ease-in-out duration-500 z-20'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-20 mt-20'
                    }
                >


                    {/* Mobile Navigation Items */}
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-2 border-b rounded-xl hover:text-[#15BFBD] duration-300 cursor-pointer hover:border-gray-600'
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Navbar Section End  */}

            {/* Banner Section Start  */}
            <div className="">
                <div className=" w-full flex lg:flex-row flex-col-reverse items-center justify-center py-10 lg:px-10 px-5">
                    <div className="lg:p-10 p-4 ">
                        <div>
                            <h2 className="text-4xl font-bold text-white ">Revolutionize Your Financial Future with Crypto Sphere</h2>
                            <p className="text-white py-5 text-xl">Join Crypto Sphere and Experience Secure, User-Friendly, and Advanced Solutions for All Your Cryptocurrency Needs</p>
                        </div>
                        <div className="py-8 px-2 flex gap-4">

                            <button className="text-[16px] font-bold bg-gradient-to-r from-[#2572DB] to-[#15BFBD] rounded-full px-4 py-2">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center bg-gradient-stops">
                        <div className="border-t-[2px] border-b-[1px] border-r-[3px] border-l-[1px] rounded-md border-blue-500 p-2  flex flex-col gap-3">
                            <div className="flex justify-between px-6 ">
                                <button className='text-[16px] font-bold bg-gradient-to-r from-[#2572DB] to-[#15BFBD] rounded-full px-10 py-2'>Buy</button>
                                <button className='rounded-full px-10 py-2 text-[16px] font-bold'>Sell</button>
                            </div>
                            <div className="">
                                <p className="">I want to spend</p>
                                <div className="flex items-center">
                                    {/* Text Input */}
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        placeholder="Limit:10-10000"
                                        className="px-4 py-2 border-2 border-blue-500 border-r-0 rounded-l-lg focus:outline-none text-black"
                                    />

                                    {/* Custom Select Dropdown */}
                                    <div className="relative">
                                        <select
                                            value={selectedOption}
                                            onChange={handleSelectChange}
                                            className="px-4 py-2 border-blue-500 border-l-0 focus:outline-none border-2 text-gray-700 rounded-md rounded-l-none"
                                        >
                                            {options.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute right-2 top-2 ">
                                            {options.find(option => option.value === selectedOption)?.icon}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="">I will receive</p>
                                <div className="flex items-center">
                                    {/* Text Input */}
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        placeholder="Limit:5,76-5,899"
                                        className="px-4 py-2 border-2 border-blue-500 border-r-0 rounded-l-lg focus:outline-none text-black"
                                    />

                                    {/* Custom Select Dropdown */}
                                    <div className="relative">
                                        <select
                                            value={selectedOption}
                                            onChange={handleSelectChange}
                                            className="px-4 py-2 border-blue-500 border-l-0 focus:outline-none border-2 text-gray-700 rounded-md rounded-l-none"
                                        >
                                            {options.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute right-2 top-2 ">
                                            {options.find(option => option.value === selectedOption)?.icon}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="">Pay with</p>
                                <div className="flex items-center">
                                    {/* Text Input */}
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        placeholder="Visa/MasterCard"
                                        className="px-4 py-2 border-2 border-blue-500 border-r-0 rounded-l-lg focus:outline-none text-black w-full"
                                    />

                                    {/* Custom Select Dropdown */}
                                    <div className="relative">
                                        <select
                                            value={selectedOption}
                                            onChange={handleSelectChange}
                                            className="px-4 py-2 border-blue-500 border-l-0 focus:outline-none border-2 text-gray-700 rounded-md rounded-l-none"
                                        >
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex justify-between items-center gap-4">
                                    <p className="">Reference Price</p>
                                    <p className="">1 BTC = 20 USD</p>
                                </div>
                                <button className='text-[16px] font-bold bg-gradient-to-r from-[#2572DB] to-[#15BFBD] rounded-lg px-10 py-2 w-full'>Buy BTC</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


