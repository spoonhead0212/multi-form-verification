'use client'
import Subheading from '../../subHeading/subheading'
import Doublesection from '../doubleSection/doublesection'
import style from './section.module.css'

import React from 'react'
const number = 1
const text = 'pick your destination'

function Section() {
  return (
    <div className={style.sectionWrapper}>
        <div>
            <Subheading
            number={`0${number}`} 
            text={text}/>
        </div>
        <Doublesection />
    </div>
  )
}

export default Section
