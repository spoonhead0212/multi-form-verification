'use client'
import Image from "next/image";
import style from './techImage.module.css'

function TechImage( {active, techData} ) {
    
    return (
        <div className={style.techImageBox}>
            <Image
            src={techData[active].images.portrait}
            fill
            alt={techData[active].name}
             />
        </div>
    )
}

export default TechImage
