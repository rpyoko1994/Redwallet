import React, { useState } from "react";
import NavbarRetroceso from "../component/NavbarRetroceso";
import Sombra from "../component/Sombra";

const Faq = () => {
  // Estado para manejar qué preguntas están abiertas
  const [openIndex, setOpenIndex] = useState(null);

  // Datos de las preguntas y respuestas
  const faqData = [
    {
      question: "Why didn't I receive the SMS OTP code?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ipsum nulla, sodales vel feugiat sed, lacinia nec diam. Duis augue massa, vestibulum at interdum ac, molestie nec ligula. Donec sit amet elit commodo, molestie dui et, pellentesque neque. Phasellus pellentesque id sem in faucibus. Nam congue pellentesque nulla, ut dictum est fermentum quis.",
    },
    {
      question:
        "What is the minimum and maximum amount per sale and purchase transaction??",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ipsum nulla, sodale vel feugiat sed, lacinia nec diam. Duis augue massa, vestibulum at interdum ac, molestie nec ligula. Donec sit amet elit commodo, molestie dui et, pellentesque neque. Phasellus pellentesque id sem in faucibus. Nam congue pellentesque nulla, ut dictum est fermentum quis.",
    },
    {
      question: "How much is the balance withdrawal fee?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ipsum nulla, sodales vel feugiat sed, lacinia nec diam. Duis augue massa, vestibulum at interdum ac, molestie nec ligula. Donec sit amet elit commodo, molestie dui et, pellentesque neque. Phasellus pellentesque id sem in faucibus. Nam congue pellentesque nulla, ut dictum est fermentum quis.",
    },
    {
      question: "How long does it take for account verification?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ipsum nulla, sodales vel feugiat sed, lacinia nec diam. Duis augue massa, vestibulum at interdum ac, molestie nec ligula. Donec sit amet elit commodo, molestie dui et, pellentesque neque. Phasellus pellentesque id sem in faucibus. Nam congue pellentesque nulla, ut dictum est fermentum quis.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <div className="degradado-rojo h-2/5">
        <div className="lineas w-full">
          <NavbarRetroceso />
          <div className="max-w-4xl mx-auto  p-6">
            <h1 className="text-2xl text-white font-bold  mb-6">
              Frequently Asked Question
            </h1>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Q Search for answer..."
                className="w-full p-4 border text-gray-800 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 mt-4">
        <h2 className="text-white text-lg">Popular Questions</h2>
      </div>
      <div className="max-w-4xl mx-auto px-4 mb-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-700 py-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex items-center">
                <span className="mr-2 transform transition-transform duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`size-6 text-white ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
                <h3 className="text-sm font-semibold camaron">
                  {item.question}
                </h3>
              </div>
            </div>

            {openIndex === index && (
              <div className="mt-2 pl-8 text-gray-300">{item.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 my-4">
        <h2 className="text-white text-lg">Search by Topics</h2>
      </div>
      <button className="w-full px-6">
        <div className="w-full border-2 rounded-2xl border-gray-500 p-4 flex items-center justify-between mb-4">
          <div className=" w-1/2 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8 camaron"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <div className="text-start w-full">
            <div className="text-white font-semibold">Getting Started</div>
          </div>
          <div className="flex justify-end w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </button>
      <button className="w-full px-6">
        <div className="w-full border-2 rounded-2xl border-gray-500 p-4 flex items-center justify-between mb-4">
          <div className=" w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8 camaron"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          <div className="text-start w-full">
            <div className="text-white font-semibold">My Account</div>
          </div>
          <div className="flex justify-end w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </button>
      <button className="w-full px-6">
        <div className="w-full border-2 rounded-2xl border-gray-500 p-4 flex items-center justify-between mb-4">
          <div className="w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8 camaron"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div className="text-start w-full">
            <div className="text-white font-semibold">Deposit</div>
          </div>
          <div className="flex justify-end w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </button>
      <button className="w-full px-6">
        <div className="w-full border-2 rounded-2xl border-gray-500 p-4 flex items-center justify-between mb-4">
          <div className="w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8 camaron"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </div>
          <div className="text-start w-full">
            <div className="text-white font-semibold w-40">Refferal Program</div>
          </div>
          <div className="flex justify-end w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </button>

      <Sombra />
    </div>
  );
};

export default Faq;
