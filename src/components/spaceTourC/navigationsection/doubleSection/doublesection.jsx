'use client'
import style from './doublesection.module.css'
import { useReducer } from 'react';
import PlanetButtons from '../planetButtons/planetButtons';
import DestContent from '../destContent/destContent';
import PlanetImage from '../destImage/PlanetImage';
import { useState, useCallback } from 'react';
import { planetData } from '@/AllSlices/spaceSlice/spaceData/planetData';




function Doublesection() {
    const [activePlanetName, setActivePlanetName] = useState('moon')
    const selectedDestination = planetData.destinations.filter(dt => dt.name.toLowerCase() === activePlanetName.toLocaleLowerCase())

    const changeDestination = useCallback((name) => {
        setActivePlanetName(name)
    })

    return (
        <div className={style.wrapper}>
            <div className={style.imgWrapper}>
                <PlanetImage selectedImage={selectedDestination} />
            </div>
            <div className={style.contentWrapper}>
                <PlanetButtons changeDestination={changeDestination}/>
                <DestContent selectedDestination={selectedDestination} />
            </div>
        </div>
    )
}

export default Doublesection
