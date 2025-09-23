import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
// import { increaseLike, decreaseLike } from '@/AllSlices/commentsSlice/commentsSlice'
import style from './counter.module.css'
import { increaseLike, decreaseLike } from '../../../AllSlices/commentsSlice/commentsSlice'

function Counter({itemId, score}) {
  
  const dispatch = useDispatch()

  return (
    <div className={style.scoreBx}>
      <button
      onClick={() => dispatch(increaseLike(itemId))}
      >
        <Image
        src='/images/commentMedia/icon-plus.svg'
        width={13}
        height={13}
        alt="add icon"
         />
      </button>
      <p>{score}</p>
      <button
      onClick={() => dispatch(decreaseLike(itemId))}
      >
        <p className={style.minus}></p>
      </button>
    </div>
  )
}

export default Counter
