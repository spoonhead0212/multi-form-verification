'use client'
import { useState, useEffect, use } from "react"
import style from './menu.module.css'
import DesktopMenu from "../desktopMenu/desktopMenu";
import MobileMenu from "../mobileMenu/mobileMenu";

function Menu() {
    const [screenWidth, setScreenWidth] = useState(0)

    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };

        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      
    return (
        <div className={style.menuWrap}>
            {screenWidth > 900 ? <DesktopMenu /> : 
            <MobileMenu />}
        </div>
    )
}

export default Menu
