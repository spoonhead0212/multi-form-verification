'use client'
// import { commentState } from '@/AllSlices/commentsSlice/commentsSlice'
import { useSelector } from 'react-redux'
import { createContext } from 'react'
import style from './commentBx.module.css'
import Counter from '../counter/counter'
import Comment from '../comment/comment'
import CommentReplyBx from '../commentReply/commentReply'
import PostComment from '../postComment/postComment'
import { useState } from 'react'
import DeleteModal from '../deleteModal/deleteModal'
import { commentState } from '../../../AllSlices/commentsSlice/commentsSlice'

export const editContext = createContext()

function CommentBx() {
    const [showInput, setShowInput] = useState(0)
    const [editing, setEditing] = useState(false)
    const [editMe, setEditMe] = useState()
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [toDeleteId, setToDeleteId] = useState(null)

    const comments = useSelector(commentState)
    const commentLists = comments.comments

    return (
    <div className={style.commentItemBx}>
        
        {commentLists.map(comment => (
            <div key={comment.id}
            >
                <div
                className={`${style.flex} ${style.commentBx}`}
                >
                    <div className={style.counterBx}>
                        <Counter itemId={comment.id} score={comment.score}/>
                    </div>
                    <editContext.Provider value={{editing, setEditing}}>
                        <div className={style.commentInside}>
                            <Comment
                            commentId={comment.id}
                            userImg={comment.user.image.png}
                            userName={comment.user.username}
                            createdAt={comment.createdAt}
                            commentPost={comment.content}
                            setShowInput={setShowInput}
                            />
                        </div>
                    </editContext.Provider>
                </div>
                
                <editContext.Provider 
                value={{
                    editing,
                    setEditing,
                    showInput,
                    setShowInput,
                    editMe,
                    setEditMe,
                    setShowDeleteModal,
                    setToDeleteId
                }}
                >
                    {showDeleteModal && <DeleteModal toDeleteId={toDeleteId}/>}
                    <CommentReplyBx parentId={comment.id} setShowInput={setShowInput}/>
                        {comment.id === showInput ? 
                            <PostComment parentId={comment.id}/> : 
                            null
                        }
                </editContext.Provider>
            </div>
            
        ))}
        
    </div>
    )
}

export default CommentBx
