import React from 'react'
import style from './home.module.css'
import CommentBx from '../../components/commentsC/commentBx/commentBx'
// import CommentBx from '@/components/commentsC/commentBx/commentBx'

function CommentHome() {
  return (
    <div className={style.home}>
      <div className={style.insideHomeBx}>
          <CommentBx />
      </div>
    </div>
  )
}

export default CommentHome
