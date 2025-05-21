import React, { useState } from "react";

export default function GardenOfTheMonth() {
  return (
    <div className="max-w-[90%] mx-auto block  md:flex gap-x-4">
      <section className="p-16 h-5xl bg-green-50/80   md:w-[60%] rounded-2xl shadow-md my-10">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          🌿 Garden of the Month
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://i.postimg.cc/PrRDsMRt/06f967450963383aa923d9b71bd872d496cc74ba2b96b7ef.jpg"
            alt="Garden of the Month"
            className="w-full md:w-1/2 rounded-xl shadow-md"
          />
          <div>
            <p className="text-lg font-medium mb-2">
              🌸 <span className="font-bold">Lily Evans</span> - Springfield
            </p>
            <p className="text-gray-700 italic">
              “A serene space filled with native wildflowers and sustainable
              practices.”
            </p>
            <img
              src="https://i.postimg.cc/sgGhVZk5/6423f7da94e698844823461.jpg"
              alt="Garden Detail"
              className="w-full md:w-3/4 rounded-xl shadow mt-4"
            />
            <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800">
              Nominate Your Garden
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
     <section className="bg-green-50/80 w-full   md:w-[40%]   rounded-2xl  shadow-md "><FAQSection /></section>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I nominate a garden?",
      answer: "Click the 'Nominate Your Garden' button and fill out the form with details and photos.",
    },
    {
      question: "Who chooses the Garden of the Month?",
      answer: "Our panel of horticulturists and community members vote each month.",
    },
    {
      question: "Can I nominate someone else's garden?",
      answer: "Yes, just be sure to get their permission and provide accurate information.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" p-6 bg-green-50/80  rounded-2xl shadow-md my-10">
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        🌼 Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 font-medium bg-green-100 hover:bg-green-200 focus:outline-none"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-700 bg-green-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
