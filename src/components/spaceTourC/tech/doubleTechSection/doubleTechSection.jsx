'use client'
import React from 'react'
import { planetData } from '@/AllSlices/spaceSlice/spaceData/planetData'
import { useState, useCallback} from 'react';
import LaunchSection from '../launchSection/launchSection';
import TechImage from '../techImage/techImage';
import style from './doubleTechSection.module.css'


function DoubleTechSection() {
    const [active, setActive] = useState(0)

    const changeActiveLaunch = useCallback((index) => {
        setActive(index)
    }, [])

    return (
        <div className={style.sectionWrapper}>
            <LaunchSection 
            active={active}
            changeActive={changeActiveLaunch}
            techData={planetData.technology}/>
            <TechImage
             active={active}
             techData={planetData.technology}/>
        </div>
    )
}

export default DoubleTechSection
