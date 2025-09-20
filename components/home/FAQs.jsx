import React, { useState } from 'react';

const FAQs = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [openFAQ, setOpenFAQ] = useState(null);

  const tabs = ['General', 'Product', 'Health', 'Support'];

  const faqData = {
    General: [
      {
        id: 1,
        question: "What makes Milking different from regular milk brands?",
        answer: "Milking is India's first certified humane dairy brand. We follow strict ethical farming practices, ensure animal welfare, use organic feed, and maintain complete transparency in our processes. Our milk is antibiotic-free, hormone-free, and comes from stress-free, well-treated cows."
      },
      {
        id: 2,
        question: "Is your milk really antibiotic-free?",
        answer: "Yes. Every batch of our milk is lab-tested and certified antibiotic-free, ensuring purity and safety for your family."
      },
      {
        id: 3,
        question: "What does 'Humane Certification' mean?",
        answer: "Humane certification means our animals are raised with the highest standards of animal welfare. They have freedom to roam, proper shelter, nutritious organic feed, and are treated with care by trained handlers. No cages, no cruel practices, just ethical farming."
      },
      {
        id: 4,
        question: "What is aflatoxin, and why does it matter?",
        answer: "Aflatoxin is a toxic substance that can contaminate dairy products when animals consume contaminated feed. We ensure our cows eat only organic, tested feed, eliminating the risk of aflatoxin contamination in our milk."
      },
      {
        id: 5,
        question: "Can I visit the farm?",
        answer: "Absolutely! We believe in complete transparency. You can schedule a farm visit to see our ethical practices firsthand and meet our happy, healthy cows. Contact us to arrange your visit."
      }
    ],
    Product: [
      {
        id: 6,
        question: "What products do you offer?",
        answer: "We offer a range of premium dairy products including fresh cow milk, cow ghee, paneer, and whole milk. All our products are made with the same ethical standards and quality commitment."
      },
      {
        id: 7,
        question: "How do you ensure product freshness?",
        answer: "Our milk is processed and packaged within hours of milking. We use cold chain logistics to maintain freshness from farm to your doorstep, ensuring you get the freshest possible product."
      },
      {
        id: 8,
        question: "Are your products organic?",
        answer: "Yes, we are Jaivik Bharat certified organic. Our cows eat only organic feed, and we follow strict organic farming practices throughout our production process."
      }
    ],
    Health: [
      {
        id: 9,
        question: "Is your milk safe for children?",
        answer: "Absolutely! Our milk is specifically safe for children as it's free from antibiotics, hormones, and harmful chemicals. The ethical farming practices ensure higher nutritional value and safety."
      },
      {
        id: 10,
        question: "Does your milk contain added hormones?",
        answer: "No, our milk is completely hormone-free. We don't use any growth hormones or artificial additives. Our cows produce milk naturally in a stress-free environment."
      },
      {
        id: 11,
        question: "What are the nutritional benefits?",
        answer: "Our ethical farming practices result in milk with higher omega-3 fatty acids, antioxidants, and essential nutrients. The stress-free environment and organic feed contribute to better nutritional quality."
      }
    ],
    Support: [
      {
        id: 12,
        question: "How can I place an order?",
        answer: "You can place orders through our website, mobile app, or by calling our customer service. We offer flexible delivery options to suit your schedule."
      },
      {
        id: 13,
        question: "What is your delivery area?",
        answer: "We currently deliver to major cities across India. Check our website or contact us to see if we deliver to your location. We're constantly expanding our delivery network."
      },
      {
        id: 14,
        question: "What is your return policy?",
        answer: "We offer a 100% satisfaction guarantee. If you're not completely satisfied with our products, contact us within 24 hours of delivery for a full refund or replacement."
      }
    ]
  };

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#9B5AB3] font-cursive text-2xl font-bold mb-4">FAQ Section</p>
          <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800">
            Got Questions? We've Got Answers
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenFAQ(null);
              }}
              className={`px-6 py-3 mx-2 mb-2 font-secondary font-medium transition-colors duration-300 border-b-2 ${
                activeTab === tab
                  ? 'text-[#9B5AB3] border-[#9B5AB3]'
                  : 'text-gray-600 border-transparent hover:text-[#9B5AB3]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData[activeTab].map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-secondary font-medium text-gray-800 pr-4">
                  {faq.question}
                </span>
                <div className={`transform transition-transform duration-200 ${
                  openFAQ === faq.id ? 'rotate-45' : ''
                }`}>
                  <svg
                    className="w-5 h-5 text-[#9B5AB3]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openFAQ === faq.id
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 text-gray-600 font-primary leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;