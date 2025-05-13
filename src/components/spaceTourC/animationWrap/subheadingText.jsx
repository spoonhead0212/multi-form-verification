'use client'
import { motion } from 'motion/react'

function SubheadingText( {children} ) {
  return (
    <motion.p
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.5}}
    className='subheading'
    style={{color: 'white'}}
    >
      {children}
    </motion.p>
  )
}

export default SubheadingText
