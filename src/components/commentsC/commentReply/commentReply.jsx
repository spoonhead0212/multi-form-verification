import React from 'react'
import style from './commentReply.module.css'
import ReplyPost from '../replyPost/replyPost'
// import { replyOnlyState} from '@/AllSlices/commentsSlice/commentsSlice'
import { useSelector } from 'react-redux'
import ReplyCounter from '../replyCounter/replycounter'
import { replyOnlyState } from '../../../AllSlices/commentsSlice/commentsSlice'

function CommentReplyBx( {parentId, setShowInput} ) {

  const repliesOnly = useSelector(replyOnlyState)
  
  const filteredReplies = repliesOnly.filter(reply => reply.replyingTo === parentId)

  if (!filteredReplies || filteredReplies.length === 0) {
    return null // Don't render anything if there are no replies
  }
  
  return (

    <div className={style.replying}>
      <div className={style.lineBx}>
         <div className={style.line}></div>
      </div> 
      <div className={style.insideComment}>
        {
          filteredReplies.map(reply => (
            <div className={`${style.flex} ${style.insideRepComment}`} key={reply.id}>
              <div>
                  <ReplyCounter itemId={reply.id} score={reply.score}/>
              </div>
              <ReplyPost
               parentId={parentId} 
               reply={reply} 
               setShowInput={setShowInput}/>
            </div>
          ))
        }
      </div>
    </div>
    
  )
}

export default CommentReplyBx
