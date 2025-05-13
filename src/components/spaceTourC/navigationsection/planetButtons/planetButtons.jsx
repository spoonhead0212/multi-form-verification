'use client'
import { planetData } from '@/AllSlices/spaceSlice/spaceData/planetData'
import style from './planetButtons.module.css'
import { motion } from 'motion/react'

function PlanetButtons( {changeDestination} ) {

    return (
        <ul className={style.destList}>
            {
                planetData.destinations.map((data, index) => (
                    <li 
                    className={style.destListBtn}
                    key={index}>
                        <motion.button
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5, delay: index * 0.2}}
                        className={style.destButton}
                        onClick={() => changeDestination(data.name.toLowerCase())}
                        >{data.name}</motion.button>
                    </li>
                ))
            }
        </ul>
    )
}

export default PlanetButtons
