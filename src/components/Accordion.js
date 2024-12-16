import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CarousalProductCard from "./CarousalProductCard";

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null); // Tracks the currently open accordion

  const accordionData = data;

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-2">
      {accordionData?.length > 0 ? (
        accordionData?.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="font-palanquin flex items-center justify-between w-full px-4 py-3 text-left font-semibold text-gray-700 hover:bg-orange-100 hover:text-orange-600 focus:outline-none"
            >
              <span>{item._id}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            {/* Accordion Content */}
            {openIndex === index && (
              <div className="px-4 py-3 bg-gray-50">
                <div className="overflow-x-auto">
                  <div className="w-fit grid grid-rows-1 grid-flow-col gap-4">
                    {item?.products?.map((product, index) => (
                      <CarousalProductCard
                        key={product?._id}
                        product={product}
                      />
                    ))}
                  </div>
                </div>
                {/* {item.content} */}
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="font-palanquin text-gray-700">No products to show!</p>
      )}
    </div>
  );
};

export default Accordion;
