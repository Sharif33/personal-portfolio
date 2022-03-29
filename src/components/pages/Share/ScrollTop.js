import React, { useEffect, useState } from 'react';
import './Header.css';
import { HiOutlineArrowUp} from "react-icons/hi";

const ScrollTop = () => {
    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
    return (
        <div>
            {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          {/* &#8679; */} <HiOutlineArrowUp/>
        </button>
      )}
        </div>
    );
};

export default ScrollTop;