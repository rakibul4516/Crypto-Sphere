import { AiFillCheckCircle } from "react-icons/ai";

const Pricing = () => {
    return (
        <section className="py-10 lg:px-10 px-4 dark:bg-gray-800 dark:text-gray-100 bg-gradient-low">
            <div className=" px-4 mx-auto">
                <div className=" mx-auto mb-16 text-center">
                    <span className="text-4xl font-bold ">Pricing Plans</span>
                    <h2 className=" ">Affordable and Flexible Plans to Suit Your Needs</h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <div className=" w-full mb-8 sm:px-4  lg:mb-0 border-t-[2px] border-b-[1px] border-r-[3px] border-l-[0px] rounded-md border-blue-500 p-3 flex flex-col gap-3 ">
                        <div className="flex flex-grow flex-col p-4 space-y-6 rounded shadow sm:p-4 ">
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold text-center">Basic</h4>
                            </div>
                            <ul className="flex flex-col lg:h-36">
                                <li className="flex mb-2 gap-1">
                                    <div className=""><AiFillCheckCircle className="text-lg font-bold text-green-400" /></div>
                                    <span className="text-[14px]">Access to Basic Wallet Management</span>
                                </li>
                                <li className="flex mb-2 space-x-1">
                                    <div className=""><AiFillCheckCircle className="text-lg font-bold text-green-400" /></div>
                                    <span className="text-[14px]">Limited Exchange Transactions</span>
                                </li>
                                <li className="flex mb-2 space-x-2">
                                    <div className=""><AiFillCheckCircle className="text-lg font-bold text-green-400" /></div>
                                    <span className="text-[14px]">TBasic Real-Time Analytics</span>
                                </li>
                                <li className="flex mb-2 space-x-2">
                                    <div className=""><AiFillCheckCircle className="text-lg font-bold text-green-400" /></div>
                                    <span className="text-[14px]">Email Support</span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-center text-center border-t-[2px] border-b-[1px] border-r-[3px] border-l-[1px] rounded-md border-blue-500 py-2 mx-auto w-4/5">
                                <h1 className="text-5xl font-extrabold">$19</h1>
                                <h5 className="">/month</h5>
                            </div>
                            <button type="button" className="text-[16px] font-bold bg-gradient-to-r from-[#2572DB] to-[#15BFBD] rounded-md px-4 py-2">Get Now</button>
                        </div>
                    </div>
                    <div className=" w-full mb-8 sm:px-4  lg:mb-0 border-t-[2px] border-b-[1px] border-r-[3px] border-l-[0px] rounded-md border-blue-500 p-5 flex flex-col gap-3">
                        <div className="flex flex-grow flex-col p-4 space-y-6 rounded shadow sm:p-4 dark:bg-gray-900">
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold text-center">Pro</h4>
                            </div>
                            <ul className="flex-1 mb-6 lg:h-36">
                                <li className="flex mb-2 space-x-2">
                                    <div className=""><AiFillCheckCircle className="text-lg font-bold text-green-400" /></div>
                                    <span className="text-[14px]">Advanced Wallet Management</span>
                                </li>
                                <li className="flex mb-2 space-x-2">
                                    <div className=""><AiFillCheckCircle className="text-lg font-bold text-green-400" /></div>
                                    <span className="text-[14px]">Unlimited Exchange Transactions</span>
                                </li>
                                <li className="flex mb-2 space-x-2">
                                    <div className=""><AiFillCheckCircle className="text-lg font-bold text-green-400" /></div>
                                    <span className="text-[14px]">Enhanced Real-Time Analytics</span>
                                </li>
                                <li className="flex mb-2 space-x-2">
                                    <div className=""><AiFillCheckCircle className="text-lg font-bold text-green-400" /></div>
                                    <span className="text-[14px]">Priority Support</span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-center text-center border-t-[2px] border-b-[1px] border-r-[3px] border-l-[1px] rounded-md border-blue-500 py-2 mx-auto w-4/5">
                                <h1 className="text-5xl font-extrabold">$49</h1>
                                <h5 className="">/month</h5>
                            </div>
                            <button type="button" className="text-[16px] font-bold bg-gradient-to-r from-[#2572DB] to-[#15BFBD] rounded-md px-4 py-2">Get Now</button>
                        </div>
                    </div>
                    <div className=" w-full mb-8 sm:px-4  lg:mb-0 border-t-[2px] border-b-[1px] border-r-[3px] border-l-[0px] rounded-md border-blue-500 p-5 flex flex-col gap-3">
                        <div className="flex flex-grow flex-col p-4 space-y-6 rounded shadow sm:p-4 dark:bg-gray-900">
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold text-center">Premium</h4>
                            </div>
                            <ul className="flex flex-col mb-6 lg:h-36">
                                <li className="flex mb-2 space-x-2">
                                    <div className=""><AiFillCheckCircle className="text-lg font-bold text-green-400" /></div>
                                    <span className="text-[14px]">Premium Wallet Management with Additional Security Features</span>
                                </li>
                                <li className="flex mb-2 space-x-2">
                                    <div className=""><AiFillCheckCircle className="text-lg font-bold text-green-400" /></div>
                                    <span className="text-[14px]">All-Inclusive Exchange Transactions</span>
                                </li>
                                <li className="flex mb-2 space-x-2">
                                    <div className=""><AiFillCheckCircle className="text-lg font-bold text-green-400" /></div>
                                    <span className="text-[14px]">TComprehensive  Analytics</span>
                                </li>
                                <li className="flex mb-2 space-x-2">
                                    <div className=""><AiFillCheckCircle className="text-lg font-bold text-green-400" /></div>
                                    <span className="text-[14px]">24/7 Dedicated Support</span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-center text-center border-t-[2px] border-b-[1px] border-r-[3px] border-l-[1px] rounded-md border-blue-500 py-2 mx-auto w-4/5">
                                <h1 className="text-5xl font-extrabold">$99</h1>
                                <h5 className="">/month</h5>
                            </div>
                            <button type="button" className="text-[16px] font-bold bg-gradient-to-r from-[#2572DB] to-[#15BFBD] rounded-md px-4 py-2">Get Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;