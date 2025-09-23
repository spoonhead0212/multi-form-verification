import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
// import { increaseReplyLike, decreaseReplyLike } from '@/AllSlices/commentsSlice/commentsSlice'
import style from './replycounter.module.css'
import { decreaseReplyLike, increaseReplyLike } from '../../../AllSlices/commentsSlice/commentsSlice'

function ReplyCounter({itemId, score}) {
  
  const dispatch = useDispatch()

  return (
    <div className={style.scoreBx}>
      <button
      onClick={() =>dispatch(increaseReplyLike(itemId))}
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
      onClick={() => dispatch(decreaseReplyLike(itemId))}
      >
        <p className={style.minus}></p>
      </button>
    </div>
  )
}

export default ReplyCounter
