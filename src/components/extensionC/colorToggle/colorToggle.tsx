import React, { useState } from 'react'
import Image from 'next/image'
import style from './colorToggle.module.css'
import LogoIcon from '../../../../public/images/extensionMedia/logo.svg'

const moon = 'images/extensionMedia/icon-moon.svg'
const sun = 'images/extensionMedia/icon-sun.svg'

interface themeProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void
}

function ColorToggle({toggleTheme, theme}: themeProps) {
    const [colorImg, setColorImg] = useState(sun)

    // console.log(theme);
    

    function handleToggle() {
        setColorImg(prev => prev === moon ? sun : moon)
        toggleTheme()
    }
    
    return (
        <div  className={style.toggleWrap}>
            <div className={style.insideToggleWrap}>
                <Image
                src='images/extensionMedia/logo.svg'
                alt='logo'
                width={150}
                height={50}
                />
                <button 
                className={style.clrModeBtn}>
                    <Image
                    src={colorImg}
                    alt='logo'
                    width={20}
                    height={20}
                    onClick={handleToggle}
                />
                </button>
            </div>
        </div>
    )
}

export default ColorToggle
