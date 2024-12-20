import React, { useEffect, useState } from 'react';
import './BannerCarousel.css';

const BannerCarousel = () => {
  const banners = [
    'https://www.bdtask.com/blog/uploads/restaurant-food-combo-offers.jpg',
    'https://th.bing.com/th/id/OIP.hW3hDE5rRl4WbYea0ae7igHaEL?rs=1&pid=ImgDetMain',
    'https://www.gannett-cdn.com/presto/2020/12/14/NPOH/16bd2d71-e031-4265-ae4f-e9ea5f01a157-Holiday_dinner.jpg?crop=5615,3159,x0,y285&width=3200&height=1801&format=pjpg&auto=webp',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Custom logic to cycle through offers: 3 → 2 → 1 → 2 → 3 → 1 → 2 ...
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Logic to update index based on custom sequence
        if (prevIndex === 0) return 2; // From Offer 1 to Offer 3
        if (prevIndex === 2) return 1; // From Offer 3 to Offer 2
        return 0; // From Offer 2 to Offer 1
      });
    }, 4000); // 4 seconds interval

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {banners.map((banner, index) => (
          <div key={index} className="carousel-slide">
            <img src={banner} alt={`Offer ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
