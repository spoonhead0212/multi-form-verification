import { createSlice } from "@reduxjs/toolkit";
import { Allcomments } from "./commentData";
import { nanoid } from 'nanoid';

const initialState = {
    currentUser: Allcomments.currentUser,
    comments: Allcomments.comments,
    replyOnly: Allcomments.comments.flatMap(com => 
        com.replies.length > 0 ?
        com.replies.map(reply => ({...reply, replyingTo: com.id})) : []
    )
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        increaseLike: (state, action) => {
            const commentScore = state.comments.find(comment => comment.id === action.payload)
            
            if (commentScore) {
                commentScore.score += 1
            }
        },
        decreaseLike: (state, action) => {
            const commentScore = state.comments.find(comment => comment.id === action.payload)

            if (commentScore && commentScore.score !== 0) {
                commentScore.score -= 1
            }
        },
        increaseReplyLike: (state, action) => {
            
            const commentScore = state.replyOnly.find(comment => comment.id === action.payload)
           
            if (commentScore && commentScore.score >= 0) {
                commentScore.score += 1
            }
        },
        decreaseReplyLike: (state, action) => {
            const commentScore = state.replyOnly.find(comment => comment.id === action.payload)
            
            if (commentScore && commentScore.score !== 0) {
                commentScore.score -= 1
            }
        },
        submitPost: (state, action) => {
            
            const { post, parentId } = action.payload;

            const findParent = state.comments.find(comment => comment.id === parentId)

            if (findParent) {
                const newReply = {
                    user: {...state.currentUser},
                    // createdAt: '1 week ago',
                    createdAt: new Date().toISOString(),
                    replyingTo: findParent.user.username,
                    id: nanoid(),
                    content: post,
                    score: 0,
                }
                findParent.replies.push(newReply)

                state.replyOnly.push({
                    ...newReply,
                    replyingTo: parentId // or use findParent.id depending on structure
                });
            }
        },
        deletePost: (state, action) => {
            state.replyOnly = state.replyOnly.filter(reply => reply.id !== action.payload)
        },
        editPost: (state, action) => {
            const { post, editMe } = action.payload;

            const editedPost = state.replyOnly.find(reply => reply.id === editMe);

            if (editedPost) {
                editedPost.content = post;
            }
        }
    }
})

export const commentState = (state) => state.comments
export const currentUser = (state) => state.comments.currentUser
export const replyOnlyState = (state) => state.comments.replyOnly
export const {
    increaseLike, 
    decreaseLike, 
    increaseReplyLike, 
    decreaseReplyLike,
    deletePost,
    editPost,
    submitPost,
} = commentsSlice.actions
export default commentsSlice.reducer
