import React from 'react'
import SubheadingText from '../animationWrap/subheadingText'
import style from './subheading.module.css'

function Subheading( {number, text} ) {
  
  return (
    <div 
    style={{display: 'flex', gap: '.7rem'}}
    className={style.subheadingWrapper}>
      <div className='wrap-conatiner'>
        <SubheadingText>
          {number}
        </SubheadingText>
      </div>
      <div>
      <SubheadingText>{text}</SubheadingText>
      </div>
    </div>
  )
}

export default Subheading
