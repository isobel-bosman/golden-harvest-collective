import React from 'react';
import { getFeaturedProducts } from './featured-products.function';

const MultiCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = getFeaturedProducts();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  if (currentIndex > cards.length - 5) {
    setCurrentIndex(0);
  }

  return (
    <div className="mt-2 flex justify-center">
      <div className="w-11/12 ">
        <div className="relative">
          <div className="flex space-x-2">
            {cards.slice(currentIndex, currentIndex + 5).map((card, index) => (
              <div
                className="flex-none w-full sm:w-1/3 lg:w-1/5 p-4 bg-white rounded-lg shadow-md"
                key={index}
              >
                <img
                  className="w-full h-52 object-cover mb-4 rounded-lg"
                  src={card.image}
                  alt="Card"
                />
                <h3 className="text-lg font-bold">{card.name}</h3>
                <p className="text-gray-500">{card.price}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 relative bottom-44">
            <button
              className="w-6 h-6 rounded-full bg-gray-300  relative right-4"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <button
              className="w-6 h-6 rounded-full bg-gray-300 relative left-10"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
