import { useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import "./border.css"
const FreqAskQuestion = () => {
    const data = [
        {
            id: 1,
            title: 'How secure is my data on Crypto Sphere?',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dui felis. Proin sit amet neque ut magna facilisis condimentum.',
        },
        {
            id: 2,
            title: 'What types of cryptocurrencies can I trade on Crypto Sphere?',
            content:
                'Crypto Sphere supports a wide range of cryptocurrencies, including popular options like Bitcoin, Ethereum, and Litecoin, as well as many altcoins. Check our platform for the full list of supported currencies.',
        },
        {
            id: 3,
            title: 'How do I create an account with Crypto Sphere?',
            content:
                'Donec euismod risus vel nulla faucibus, sit amet volutpat eros fermentum. Aenean ac fermentum nibh.',
        },
        {
            id: 4,
            title: 'Can I use Crypto Sphere on my mobile device?',
            content:
                'Donec euismod risus vel nulla faucibus, sit amet volutpat eros fermentum. Aenean ac fermentum nibh.',
        },
        {
            id: 5,
            title: 'What fees are associated with using Crypto Sphere?',
            content:
                'Donec euismod risus vel nulla faucibus, sit amet volutpat eros fermentum. Aenean ac fermentum nibh.',
        },
    ];

    const [openAccordionId, setOpenAccordionId] = useState(data[1]?.id || null);

    const toggleAccordion = (id) => {
        if (openAccordionId === id) {
            setOpenAccordionId(null); // Close the accordion if already open
        } else {
            setOpenAccordionId(id); // Open the selected accordion
        }
    };

    return (
        <div className="mx-auto mt-10 lg:px-16 px-4 ">
            <div className=" mx-auto mb-16 text-center">
                <span className="text-4xl font-bold ">Frequently Asked Questions</span>
                <h2 className=" ">Your Questions Answered</h2>
            </div>
            <div className="">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={`border-4 mb-4 rounded-lg ${openAccordionId === item.id ? 'input-gradient' : 'border-gray-300'
                            }`}
                    >
                        {/* Accordion Header */}
                        <div
                            onClick={() => toggleAccordion(item.id)}
                            className={`flex justify-between items-center p-4 cursor-pointer transition-colors duration-300 ${openAccordionId === item.id
                                ? 'bg-gradient-to-r from-[#2572DB] to-[#15BFBD] bg-clip-text text-transparent'
                                : ' text-white'
                                }`}
                        >
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <span>
                                {openAccordionId === item.id ? (
                                    <FaChevronUp className="text-[#15BFDB] font-bold text-lg" />
                                ) : (
                                    <FaChevronDown className="text-gray-600" />
                                )}
                            </span>
                        </div>

                        {/* Accordion Content */}
                        {openAccordionId === item.id && (
                            <div className="p-4 text-sm transition-all duration-300 bg-gradient-to-r from-[#2572DB] to-[#15BFBD] bg-clip-text text-transparent">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FreqAskQuestion;


