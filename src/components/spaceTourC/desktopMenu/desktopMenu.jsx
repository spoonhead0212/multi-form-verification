'use client'
import { menuData } from "@/AllSlices/spaceSlice/spaceData/menu"
import style from './desktopMenu.module.css'
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
import { motion } from "motion/react"

function DesktopMenu() {
  return (
    <div className={style.desktopMenu}>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: .5, delay: .2}}
        className={style.logo}>
            <Image 
            src="./images/spaceMedia/shared/logo.svg" 
            alt="logo" 
            width={50}
            height={50}/>
        </motion.div>
        <div className={style.lineContainer}>
            <motion.div
            initial={{transform: 'translateX(-100%)'}}
            animate={{transform: 'translateX(0)'}}
            transition={{duration: .5, delay: .6}}
            className={style.line}>
            </motion.div>
        </div>
        <div className={style.navWrap}>
            <ul className={clsx(style.menuNav)}>
                {menuData.map((item) => (
                    <motion.li 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: .5, delay: 1}}
                    key={item.id}>
                        <Link 
                        className={style.menuLink}
                        href={item.link}>
                        <span 
                        className={style.menuNumber}>
                        {`0${item.id}`}
                        </span>
                        <span>{item.name}</span>
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default DesktopMenu
