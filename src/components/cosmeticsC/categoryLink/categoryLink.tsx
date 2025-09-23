'use client'
import React from 'react'
import Link from 'next/link'
import style from './categoryLink.module.css'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { ImageSlideIn } from '../animationStyles/animations'


const linksName = [
    'fragrance',
    'skin care',
    'hair care',
    'makeup',
    'shop'
]

const Fade = (i: number) => ({
  initial: { y: "-100%" },
  whileInView: { y: 0 },
  transition: {
    duration: 0.4,
    delay: i * 0.4,
  },
  viewport: {
     once: true,
  }
});

const MotionImage = motion(Image)


const MotionLink = motion(Link);

function CategoryLink() {
  return (
    <div className={style.categoryBox}>
      <div className={style.categoryBox_left}>
        <div 
        style={{overflow: 'hidden'}}>
            <MotionImage
            src='/images/cosmeticsMedia/category/skin-care.jpg'
            fill
            alt='category image' 
            {...ImageSlideIn}/>
        </div>
      </div>
      <div className={style.categoryBox_link}>
        {
        linksName.map((link, i) => (
            <MotionLink
            key={i}
            href={link.replace(' ', '-')}
            >
            <motion.p
            {...Fade(i)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </motion.p>
            </MotionLink>
        ))
      }
      </div>
      <div className={style.categoryBox_right}>
        <div style={{overflow: 'hidden'}}>
            <MotionImage
            src='/images/cosmeticsMedia/category/fragrance.jpg'
            fill
            alt='category image'
            {...ImageSlideIn}
             />
        </div>
      </div>
    </div>
  )
}

export default CategoryLink
