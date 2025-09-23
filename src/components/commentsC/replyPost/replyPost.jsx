import React from 'react'
import style from './replyPost.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
// import { currentUser} from '@/AllSlices/commentsSlice/commentsSlice'
import { useContext } from 'react'
import { editContext } from '../commentBx/commentBx'
// import { replyOnlyState } from '@/AllSlices/commentsSlice/commentsSlice'
import { formatDistanceToNow } from 'date-fns'
import { currentUser, replyOnlyState } from '../../../AllSlices/commentsSlice/commentsSlice'



function ReplyPost( {parentId, reply} ) {
    
    const userAcc = useSelector(currentUser)
    const xxxxx = useSelector(replyOnlyState)

    const {
        setEditing,
        setShowInput,
        setEditMe,
        setShowDeleteModal,
        setToDeleteId,
    } = useContext(editContext)
    
    function insideReplyBtn(e) {
        setEditing(false)
        setShowInput(e)
    }

    function deletePostPopUp() {
        setShowDeleteModal(true)
        document.body.style.overflow = 'hidden'
    }

    function switchToEdit(e) {
        const findMe = xxxxx.find(x => x.id === reply.id)
        setEditing(true)
        setShowInput(e)
        setEditMe(findMe)
    }

    const userAccUserName = userAcc.username;

    return (
        <div className={style.replyInside}>
            <div className={`${style.flex} ${style.pro}`}>
                <div
                className={`${style.flex} ${style.userPro}`} 
                >
                    <Image
                        src={reply.user.image.png}
                        width={30}
                        height={30}
                        alt='reply-icon'
                    />
                    <p className={style.name}>{reply.user.username}</p>
                    {userAccUserName === reply.user.username ?
                    <p className={style.currentUser}>You</p> : null}
                    <p className={style.createdAt}>{formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })}</p>
                </div>
                <div className={style.replyOpt}>
                    {userAccUserName === reply.user.username ?
                    <div
                    className={style.doubleBtn}
                    >
                        <button
                        onClick={() => {
                            setToDeleteId(reply.id)
                            deletePostPopUp()
                        }}
                        className={style.deleteBtn}
                        >
                            <Image
                            src='./images/commentMedia/icon-delete.svg'
                            width={13}
                            height={13}
                            alt={`${reply.user.userName}'s avatar`}
                            />
                            Delete
                        </button>
                        <button
                        onClick={() => 
                            switchToEdit(parentId)
                        }
                        className={style.editBtn}
                        >
                            <Image
                            src='./images/commentMedia/icon-reply.svg'
                            width={13}
                            height={13}
                            alt={`${reply.user.userName}'s avatar`}
                            />
                            Edit
                        </button>
                    </div> :
                    <button
                        onClick={() => insideReplyBtn(parentId)}
                        className={style.replyBtn}
                        >
                            <Image
                            src='./images/commentMedia/icon-reply.svg'
                            width={13}
                            height={13}
                            alt={`${reply.user.userName}'s avatar`}
                            />
                            Reply
                    </button>
                    }
                </div>
            </div>
            <p className={style.itemContent}>{reply.content}</p>
        </div>
    )
}

export default ReplyPost
