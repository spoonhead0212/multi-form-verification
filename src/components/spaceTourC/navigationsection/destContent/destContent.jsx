import React from 'react'
import SlidingHeader from '../../animationWrap/slidingHeader/slidingHeader'
import SlidingParagraph from '../../animationWrap/paragraph/slidingParagraph'
import style from './destContent.module.css'
import { motion } from 'motion/react'


function DestContent( {selectedDestination} ) {

  const destination = selectedDestination[0];
  
    
  return (
      <div>
        <div>
          <div className='wrap-container'>
            <SlidingHeader
            >{destination.name}
            </SlidingHeader>
          </div>
          <div className={`${style.mobileWrap} wrap-container`}>
            <SlidingParagraph>
              {destination.description}
            </SlidingParagraph>
          </div>
          <div
          className={`${style.lineWrapper} wrap-container`}
          >
            <motion.div
              initial={{x: '-100%'}}
              animate={{x: '0%'}}
              transition={{duration: 0.5, delay: 2}}
              className={style.line}>
            </motion.div>
          </div>
          <div className={style.destContentWrapper}>
            <div>
              <div className='wrap-container'>
                <motion.p
                initial={{x: '-100%'}}
                animate={{x: '0%'}}
                transition={{duration: 0.5, delay: 2.5}}
                className={style.time}
                >avg. distance</motion.p>
              </div>
              <div className='wrap-container'>
                <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 3}}
                className={style.distance}
                >{destination.distance}
                </motion.p>
              </div>
            </div>
            <div>
              <div className='wrap-container'>
                <motion.p
                initial={{x: '-100%'}}
                animate={{x: '0%'}}
                transition={{duration: 0.5, delay: 2.5}}
                className={style.time}
                >est. travel time</motion.p>
              </div>
              <div className='wrap-container'>
                <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 3}}
                className={style.distance}
                >{destination.travel}
                </motion.p>
              </div>
            </div>
          </div>
        </div> 
      </div>
  )
}

export default DestContent

