import React, { useState } from 'react';

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      author: "John Doe",
      slogan: "This service changed my life for the better!",
    },
    {
      author: "Jane Smith",
      slogan: "A fantastic experience, highly recommend it!",
    },
    {
      author: "Emily Johnson",
      slogan: "Top-notch quality and excellent support.",
    },
    {
      author: "Michael Brown",
      slogan: "I couldn't be happier with the results!",
    },
    {
      author: "Sarah Davis",
      slogan: "Amazing value and great customer care.",
    },
  ];

  const handleBackClick = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleFwdClick = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div
        id="card"
        className="h-20 w-96 bg-slate-500 rounded text-white text-center py-3"
      >
        <h2 className="italic">{data[currentIndex].slogan}</h2>
        <h4 className="font-bold">- {data[currentIndex].author}</h4>
      </div>
      <div id="btn" className="flex space-x-4">
        <button
          className="rounded-full p-2 bg-slate-100"
          onClick={handleBackClick}
        >
          {"<"}
        </button>
        <button
          className="rounded-full p-2 bg-slate-100"
          onClick={handleFwdClick}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
