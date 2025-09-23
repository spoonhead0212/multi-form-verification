'use client'
import React from 'react'
import style from './homeCards.module.css'
import {motion} from 'framer-motion'
import { SlideInLoop } from '../animationStyles/animations'

const cardContent = [
    {
        top: 'Free Shipping Worldwide',
        bottom: 'Because you deserve it',
    },
    {
        top: 'Let\'s Make It Personal',
        bottom: 'We modify the design according to you',
    },
    {
        top: 'Secured Payment',
        bottom: 'Paypal and credit card',
    }
]

function HomeCard() {
  return (
    <div className={style.cardBox}>
      {cardContent.map((card, i) => (
        <div
        key={i}
        className={style.cardbox_inside}
        >
          <div style={{overflow: 'hidden'}}>
            <motion.h3 {...SlideInLoop}>{card.top}</motion.h3>
          </div>
          <div style={{overflow: 'hidden'}}>
            <motion.p {...SlideInLoop}>{card.bottom}</motion.p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeCard
