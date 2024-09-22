import "./border.css"
const Contact = () => {
    return (
        <section className="lg:w-2/3 mx-auto px-4 py-10 ">
            <div className="mx-auto">
                <div className="mb-4">
                    <div className=" mx-auto mb-16 text-center">
                        <span className="text-4xl font-bold ">Get in Touch</span>
                        <h2 className=" ">We're Here to Help You</h2>
                    </div>
                </div>
                <div className="bg-transparent">
                    <div className="">

                        <div className="" >
                            <form>
                                <div className="mb-6">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label className="pb-1 text-xs uppercase tracking-wider"></label>
                                            <div className=" rounded-md p-1">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    placeholder="name"
                                                    className="mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 focus:outline-none input-gradient"
                                                    name="name"
                                                />
                                            </div>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label className="pb-1 text-xs uppercase tracking-wider"></label>
                                            <div className="gradient-border rounded-md p-1">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    placeholder="example@mail.com"
                                                    className="mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 focus:outline-none input-gradient"
                                                    name="email"
                                                />
                                            </div>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label className="pb-1 text-xs uppercase tracking-wider"></label>
                                            <div className="gradient-border rounded-md p-1">
                                                <input
                                                    type="text"
                                                    id="property-detail"
                                                    placeholder="Property Detail"
                                                    className="mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 focus:outline-none input-gradient"
                                                    name="property-detail"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <div className="gradient-border rounded-md p-1">
                                            <textarea
                                                id="textarea"
                                                name="textarea"
                                                cols="30"
                                                rows="5"
                                                placeholder="Description"
                                                className="mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 focus:outline-none input-gradient"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex lg:justify-end justify-center">
                                    <button className="text-[16px] font-bold bg-gradient-to-r from-[#2572DB] to-[#15BFBD] rounded-md px-10 py-2">
                                        Send Message
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;