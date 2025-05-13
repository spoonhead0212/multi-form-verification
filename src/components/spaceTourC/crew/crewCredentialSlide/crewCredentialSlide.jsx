'use client'
import React from 'react'
import style from './crewCredentialSlide.module.css'
import { planetData } from '@/AllSlices/spaceSlice/spaceData/planetData'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function CrewCredentialSlide( {swipeChange} ) {
    const crew = planetData.crew
    
    return (
        <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={true}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        className={style.swiperCrewSlide}
        onSlideChange={swipeChange}
        >
            {
                crew.map((data, i) => (
                    <SwiperSlide
                    className={style.swipeWrap}
                    key={i}>
                        <p className={style.crewRole}>{data.role}</p>
                        <h2 className={style.name}>{data.name}</h2>
                        <p className={`${style.bio} paragraph`}>{data.bio}</p>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default CrewCredentialSlide
