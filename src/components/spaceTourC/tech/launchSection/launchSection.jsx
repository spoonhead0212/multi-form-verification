'use client'
import style from './launchSection.module.css'
import SlidingParagraph from '../../animationWrap/paragraph/slidingParagraph'
import { motion } from 'motion/react'

const Techhead = motion('h2')

const techheadanime = {
    initial: {y: '-100%'},
    animate: {y: 0},
    transition: {duration: 0.5, delay: 0.5, type: 'spring'},
}

function LaunchSection( {changeActive, techData, active} ) {
    
  return (
    <div className={style.launchSectionWrapper}>
        <div className={style.launchSectionNumberBox}>
            {
                techData.map((_, i) => (
                    <motion.button
                    className={`${i === active ? style.active : ''} ${style.techButton}`}
                    type='button'
                    key={i}
                    onClick={() => changeActive(i)}
                    >{i + 1}
                    </motion.button>
                ))
            }
        </div>
        <div>
            <div className={style.smallText}>
                <small className={style.techTerm}>The terminology.....</small>
            </div>
            <div className={style.techDescriptionBoxed}>
                <div className='wrap-container'>
                    <Techhead
                    {...techheadanime}
                     className={style.techName}>
                        {techData[active].name}
                    </Techhead>
                </div>
                <div className={`${style.techDescription} wrap-container`}>
                    <SlidingParagraph>
                        {techData[active].description}
                    </SlidingParagraph>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default LaunchSection
