import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import slide1 from '../../assets/images/slide1.svg';
import slide2 from '../../assets/images/slide2.svg';
import slide3 from '../../assets/images/slide3.svg';
import styled from 'styled-components';

const SliderWrapper = styled(Swiper)`
    width: 100%;
    z-index: 1;
`

const Slide = styled(SwiperSlide)`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: auto;
        display: block;
    }
`

const Slider = () => {
    return (
        <SliderWrapper
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
        >
            <Slide>
                <img src={slide1} alt="slide1" />
            </Slide>
            <Slide>
                <img src={slide2} alt="slide2" />
            </Slide>
            <Slide>
                <img src={slide3} alt="slide3" />
            </Slide>
        </SliderWrapper>
    )
}

export default Slider;
