import React from 'react'
import { motion } from 'motion/react'

function SlidingHeader( {children} ) {
  return (
    <motion.h2
    initial={{y: '-100%'}}
    animate={{y: '0%'}}
    transition={{duration: 0.8, delay: 0.5}}
    className='sliding-header'
    >
    {children}
    </motion.h2>
  )
}

export default SlidingHeader
