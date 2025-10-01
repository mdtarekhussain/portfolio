import React from 'react';
import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold,PiCaretRightBold } from 'react-icons/pi';

const WarkSliderBtns = ({containerStyles,btnStyles,iconsStyle}) => {
    const swiper = useSwiper()
    return (
        <div className={containerStyles}>
            <button className={btnStyles}>
                <PiCaretLeftBold className={iconsStyle} onClick={()=> swiper.slidePrev()}/>
            </button>
            <button className={btnStyles}>
                <PiCaretRightBold className={iconsStyle} onClick={()=> swiper.slideNext()}></PiCaretRightBold>
            </button>
        </div>
    );
};

export default WarkSliderBtns;