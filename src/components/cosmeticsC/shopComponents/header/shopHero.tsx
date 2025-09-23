'use client'
import React from 'react'
import style from './style.module.css'
import { motion } from "framer-motion";

const xxx = [1, 2, 3, 4, 5, 6, 7]

const styling = {
  padding: '50px',
  backgroundColor: 'red',
  width: '50px'
}

function ShopHero() {
  return (
    <>
    <div className={style.shopHeader}>
      <div className={style.shopHeader_Box}>
        <motion.h1 className={style.shopHeader_text}>shop</motion.h1>
      </div>
    </div>
    <div>
        {xxx.map((x, i) => (
          <motion.div
          style={styling}
          key={i}
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.6}}
          >
            {x}
          </motion.div>
        ))}
      </div>
    </>
    
  )
}

export default ShopHero
