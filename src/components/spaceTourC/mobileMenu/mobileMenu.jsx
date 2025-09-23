'use client'
// import { menuData } from "@/AllSlices/spaceSlice/spaceData/menu"
import style from './mobileMenu.module.css'
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import Link from "next/link"
import { menuData } from '../../../AllSlices/spaceSlice/spaceData/menu'

const Hamburger = motion(Image)

function MobileMenu() {
    const [isActive, setActive] = useState(false)

    const changeActive = () => {
        setActive(!isActive)
    }

  return (
    <div className={`${style.mobileMenuWrap}`}>
        <div className={style.mobileMenuInside}>
            <div>
                <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: .5, delay: .2}}
                className={style.mobileLogo}>
                    <Image 
                    src="./images/spaceMedia/shared/logo.svg" 
                    alt="logo" 
                    width={40}
                    height={40}/>
                </motion.div>
            </div>
            <div onClick={changeActive}>
                <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: .5, delay: .2}}
                className={style.mobileLogo}>
                    <Hamburger 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: .5, delay: .2}}
                    src={`${ isActive ? './images/spaceMedia/shared/icon-close.svg' : './images/spaceMedia/shared/icon-hamburger.svg'}`} 
                    alt="logo" 
                    width={40}
                    height={40}/>
                </motion.div>
            </div>
        </div>
        <AnimatePresence initial={false}>
            {isActive ? <motion.div
            initial={{opacity: 0, x: '-100%'}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: '-100%'}}
            className={style.menuSlide}>
                <ul className={style.menuNav}>
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
                            <span className={style.menuName}>{item.name}</span>
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </motion.div> : null}
        </AnimatePresence>
    </div>
  )
}

export default MobileMenu
