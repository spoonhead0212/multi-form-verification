'use client'
import React from 'react'
import Subheading from '../../subHeading/subheading'
import CrewDoubleSection from '../crewDoubleSection/crewdoubleSection';
import style from './crewsection.module.css'
import CrewImage from '../crewImage/crewImage';
import { useState } from 'react';

function CrewSection() {
    const [crewIndex, setCrewIndex] = useState(0)
    const number = 2;
    const text = 'meet your crew'

    const handleSwipeChange = (swiper) => {
      setCrewIndex(swiper.activeIndex)
  }

  return (
    <div className={style.crewWrap}>
      <Subheading
      number={number}
      text={text}
       />
       <div className={style.doubleBox}>
          <CrewDoubleSection swipeChange={handleSwipeChange}/>
          <CrewImage crewIndex={crewIndex}/>
       </div>
    </div>
  )
}

export default CrewSection
