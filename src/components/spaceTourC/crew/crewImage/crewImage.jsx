'use client'
import { planetData } from '@/AllSlices/spaceSlice/spaceData/planetData'
import Image from 'next/image';
import style from './crewImage.module.css'

function CrewImage( {crewIndex} ) {

    const crewImg = planetData.crew[crewIndex].images.png

    return (
        <div className={style.imgWrap}>
           <div>
              <Image     
                src={crewImg}
                fill
                alt='Member images'
            />
           </div>
        </div>
    )
}

export default CrewImage
