'use client'
import React from 'react'
import style from './destination.module.css'
import clsx from 'clsx'
import Section from '@/components/spaceTourC/navigationsection/destSections/destSection'

function Destination() {

  return (
    <div className={clsx(style.container, style.destinationContainer)}>
      <Section />
    </div>
  )
}

export default Destination
