
const Contact = () => {
    return (
        <section className="w-2/3 mx-auto px-4 py-10 ">
            <div className="mx-auto">
                <div className="mb-4">
                <div className=" mx-auto mb-16 text-center">
                    <span className="text-4xl font-bold ">Get in Touch</span>
                    <h2 className=" ">We're Here to Help You</h2>
                </div>
                </div>
                <div className="">
                    <div className="">
                     
                        <div className="" >
                            <form >
                                <div className="mb-6">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name" />
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
                                        </div>
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                                    </div>
                                </div>
                                <div className="w-full flex justify-end">
                                    <button className="text-[16px] font-bold bg-gradient-to-r from-[#2572DB] to-[#15BFBD] rounded-full px-10 py-2">
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