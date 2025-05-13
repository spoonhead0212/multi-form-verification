import React from 'react'
import style from './crew.module.css'
import CrewSection from '@/components/spaceTourC/crew/crewSection/crewSection'

function Crew() {
  return (
    <div className={`${style.container} ${style.crewContainer}`}>
      <CrewSection />
    </div>
  )
}

export default Crew
