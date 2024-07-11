import React from 'react';
import honeyComb from '../../assets/images/products/honeycomb.jpeg';
import foodGradeWax from '../../assets/images/products/food-grade-wax.jpeg';
import creamedHoney from '../../assets/images/products/creamed-honey.jpeg';
import giftFavours from '../../assets/images/products/gift-favours.jpeg';
import wildflower375 from '../../assets/images/products/wildflower-375.jpeg';
import wildflower500 from '../../assets/images/products/wildflower-500.jpeg';
import wildflowerKg from '../../assets/images/products/wildflower-kg.jpeg';
import buffaloThorn500 from '../../assets/images/products/buffalo-thorn-500.jpeg';
import buffaloThornKg from '../../assets/images/products/buffalo-thorn-kg.jpeg';
import bluegum500 from '../../assets/images/products/bluegum-500.jpeg';

const MultiCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: honeyComb,
      title: 'Honeycomb 350g',
      description: 'R65',
    },
    {
      image: foodGradeWax,
      title: 'Food Grade Wax',
      description: 'R280 per Kg',
    },
    {
      image: creamedHoney,
      title: 'Creamed Honey',
      description: 'R50',
    },
    {
      image: giftFavours,
      title: 'Gift Favours 165g',
      description: 'R43',
    },
    {
      image: wildflower375,
      title: 'Wildflower 375g',
      description: 'R60',
    },
    {
      image: wildflower500,
      title: 'Wildflower 500g',
      description: 'R80',
    },
    {
      image: wildflowerKg,
      title: 'Wildflower 1Kg',
      description: 'R140',
    },
    {
      image: buffaloThorn500,
      title: 'Buffalo Thorn 500g',
      description: 'R80',
    },
    {
      image: buffaloThornKg,
      title: 'Buffalo Thorn 1Kg',
      description: 'R140',
    },
    {
      image: bluegum500,
      title: 'Bluegum 500g',
      description: 'R80',
    },
  ];

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
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-gray-500">{card.description}</p>
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
