import React from 'react'
import clsx from 'clsx'
import style from './tech.module.css'
import TechSection from '@/components/spaceTourC/tech/techSection/techSection'

function Technology() {

  return (
    <div className={clsx(style.container, style.techContainer)}>
      <TechSection />
    </div>
  )
}

export default Technology
