import React from 'react'
import { motion } from 'motion/react'

function SlidingParagraph( {children} ) {
  return (
    <motion.p
    initial={{y: '-100%'}}
    animate={{y: '0%'}}
    transition={{duration: 0.8, delay: 1.5}}
    className='sliding-paragraph paragraph'
    >
    {children}
    </motion.p>
  )
}

export default SlidingParagraph