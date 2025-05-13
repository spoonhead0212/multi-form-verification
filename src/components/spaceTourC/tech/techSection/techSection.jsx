import React from 'react'
import Subheading from '../../subHeading/subheading'
import DoubleTechSection from '../doubleTechSection/doubleTechSection';
import style from './techSection.module.css'

function TechSection() {

    const number = 3;
    const text = 'space launch 101'

    return (
        <div className={style.techSectionWrapper}>
            <Subheading
            number={number}
            text={text}
            className={style.techSubheading}
            />
            <DoubleTechSection />
        </div>
  )
}

export default TechSection
