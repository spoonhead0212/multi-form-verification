import React from 'react'
import style from './comment.module.css'
import Image from 'next/image'
import CommentReplyBx from '../commentReply/commentReply'
import { useContext } from 'react'
import { editContext } from '../commentBx/commentBx'

function Comment({
        commentId,
        userImg,
        userName,
        createdAt,
        commentPost,
        replies,
        setShowInput
   }) {

    const {setEditing} = useContext(editContext)

    function replyBtn(e) {
        setShowInput(e)
        setEditing(false)
    }
    

  return (
    <div>
        <div className={`${style.flex} ${style.pro}`}>
            <div className={`${style.flex} ${style.userPro}`} >
                <Image
                    src={userImg}
                    width={30}
                    height={30}
                    alt='reply-icon'
                />
                <p className={style.name}>{userName}</p>
                <p className={style.createdAt}>{createdAt}</p>
            </div>
            <button
            onClick={() => replyBtn(commentId)}
            className={style.replyBtn}
            >
                <Image
                src='./images/commentMedia/icon-reply.svg'
                width={13}
                height={13}
                alt={`${userName}'s avatar`}
                />
                Reply
            </button>
        </div>
        <p className={style.itemContent}>
            {commentPost}
        </p>
        <CommentReplyBx replies={replies} />
    </div>
  )
}

export default Comment
