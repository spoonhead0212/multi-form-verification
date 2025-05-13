'use client'
import style from './homeHero.module.css'
import { motion } from 'motion/react'

function HomeHero() {
  return (
        <div className={style.hero}>
            <div className={style.heroContent}>
                <div className='wrap-container'>
                    <motion.p 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}
                        className='subheading'>
                        so you want to travel
                    </motion.p>
                </div>
                <div
                    className='wrap-container'>
                    <motion.h1
                     initial={{y: '-100%'}}
                     animate={{y: '0%'}}
                     transition={{duration: 0.8, delay: 0.5}}
                     className='home-heading'>
                    space
                    </motion.h1>
                </div>
                <div
                className={`${style.homePara} wrap-container`}>
                    <motion.p 
                    className='paragraph'
                    initial={{y: '-100%'}}
                    animate={{y: '0%'}}
                    transition={{duration: 0.7, delay: 1.3}}
                    >
                        Let's face it; if you want to go to space, you might as well genuinely go to outer space and hover kind of on the edge of it. well sit back, and relax because we'll give you a truly out of this world experience
                    </motion.p>
                </div>
            </div>
            <div className={`${style.exploreContainer} wrap-container`} >
                <motion.p
                className={style.explore}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 1.3}}
                >
                    explore
                </motion.p>
            </div>
        </div>
  )
}

export default HomeHero
