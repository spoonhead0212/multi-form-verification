import React from 'react'
import Image  from 'next/image'
import { useState } from 'react';
// import { Allcomments } from '@/AllSlices/commentsSlice/commentData';
// import { editPost, submitPost } from '@/AllSlices/commentsSlice/commentsSlice';
import { useDispatch } from 'react-redux';
import style from './postComment.module.css'
import { useContext } from 'react';
import { editContext } from '../commentBx/commentBx';
import { Allcomments } from '../../../AllSlices/commentsSlice/commentData';
import { editPost, submitPost } from '../../../AllSlices/commentsSlice/commentsSlice';

function PostComment( {parentId} ) {
    const {editing, editMe} = useContext(editContext)
    const [post, setPost] = useState('')

    const currentUser = Allcomments.currentUser

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (post.trim() === '') return
        // return nothing if the input says nothing
        if (editing === true) {
            dispatch(editPost({post, editMe: editMe?.id}))
            setPost('')
        } else {
            dispatch(submitPost({post, parentId}))
            setPost('')
        }
    }

    return (
        <div
        className={style.inputBox}
        >
            <Image
            src={currentUser.image.png}
            width={30}
            height={30}
            alt={`${currentUser.username} avatar`}
            />
            <div className={style.inputSection}>
                <form 
                action=""
                className={style.commentInput}
                onSubmit={handleSubmit}
                >
                    <textarea 
                    className={style.typeComment}
                    placeholder='Add a comment...'
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                    rows='4'
                    >
                    </textarea>
                    <button
                    className={style.submitBtn}
                     type='submit'>{editing ? 'update' : 'submit'}</button>
                </form>
            </div>
        </div>
    )
}

export default PostComment
