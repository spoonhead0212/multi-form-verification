'use client'
import { useState, useEffect, useRef } from 'react';
import { heroSlides } from '../../../AllSlices/cosmeticsSlice/cosmeticsData';
import style from './hero.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "motion/react"

interface heroShape {
  backgroundImage: string;
  mobileBackgroundImage: string;
  header: string;
  content: string;
  button: string;
}

const MotionLink = motion(Link)

const heroSlide: heroShape[] = heroSlides;''
const slideEnd = heroSlide.length-1;
// tell us when we are at the edge of the array

function Hero() {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  // update the slider for css
  const [direction, setDirection] = useState<number>(0)
  // update for tracking when to moc forward or backward
  const divRef = useRef<HTMLDivElement | null>(null)
  
  const add = () => {
    setCurrentSlide(prev => prev + 1)
  }

  const reverse = () => {
    setCurrentSlide(prev => prev - 1)
  }

  const forward = () => {
    add()
  }
  const backward = () => {
    reverse()
  }


  useEffect(() => {
    const id = setInterval(() => {
    setCurrentSlide(prev => {
        if (prev === slideEnd) {
          setDirection(-1); // start going backward
          return prev - 1;
        } else if (prev === 0) {
          setDirection(1); // start going forward
          return prev + 1;
        }
        return prev + direction;
      });
    }, 5000);
    return () => clearInterval(id)
  }, [direction])

  return (
    <div className={style.heroFence}>
      <motion.div 
      className={style.heroFence_inside}
      animate={{x: `-${currentSlide}00vw`}}
      >
        {heroSlides.map((hero, index) => (
            <div
             className={style.heroFence_insideContent} 
             key={index}
             ref={divRef}
             >
                <div className={style.BGWrap}>
                    <picture>
                        <source
                         media='(width < 599px)' srcSet={`${hero.mobileBackgroundImage}`}/>
                        <source
                         media='(width >= 600px)' srcSet={`${hero.backgroundImage}`}/>
                        <Image
                        src={`${hero.backgroundImage}`}
                        fill={true}
                        priority={true}
                        alt='Cart icon'
                        />
                    </picture>
                </div>
                <div className={style.contentBox}>
                    <div style={{overflow: 'hidden'}}>
                        <motion.h1
                        initial={{y: '-100%',}}
                        animate={{ 
                            y: 0,
                            transition: { duration: .5 }
                        }}
                       >{hero.header}</motion.h1>
                    </div>
                    <div 
                    style={{overflow: 'hidden', marginTop: '.5rem'}}
                    className={style.heroPar}
                    >
                        <motion.p
                        initial={{y: '-100%',}}
                        animate={{ 
                            y: 0,
                            transition: { duration: .5, delay: .75 }
                        }}
                        >{hero.content}</motion.p>
                    </div>
                    <div 
                    style={{overflow: 'hidden', marginTop: '1rem'}}>
                        <MotionLink 
                        initial={{y: '-120%'}}
                        animate={{
                            y: '0',
                            transition: {duration: .4, delay: 1}
                        }}
                        className={style.ctaBtn}
                        href='/shop'>
                            {hero.button}
                        </MotionLink>
                    </div>
                </div>
            </div>
        ))}
      </motion.div>
      <div className={style.scrollDirection}>
        <button
        style={{opacity: `${currentSlide === 0 ? 0 : 1}`}}
        >
          <Image
          src='/images/cosmeticsMedia/icons/left-arrow-svgrepo-com.svg'
          height={20}
          width={20}
          alt='Search Icon'
          onClick={backward}
          />
        </button>
        <button
          style={{opacity: `${currentSlide === slideEnd ? 0 : 1}`}}
        >
          <Image
          src='/images/cosmeticsMedia/icons/right-arrow-svgrepo-com.svg'
          height={20}
          width={20}
          alt='Search Icon'
          onClick={forward}
          />
        </button>
      </div>
    </div>
  )
}

export default Hero
