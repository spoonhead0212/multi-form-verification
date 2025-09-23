import React from 'react'
import { editContext } from '../commentBx/commentBx'
import { useContext } from 'react'
// import { deletePost } from '@/AllSlices/commentsSlice/commentsSlice';
import { useDispatch } from 'react-redux';
import style from './deleteModal.module.css'
import { deletePost } from '../../../AllSlices/commentsSlice/commentsSlice';




function DeleteModal( {toDeleteId} ) {

    console.log('We done MOUNT !!!');
    
    const dispatch = useDispatch()
    

    const {setShowDeleteModal} = useContext(editContext)

    return(
        <div className={style.delModal}>
            <div className={style.insideModal}>
                <div className={style.modalContent}>
                    <h3>Delete comment</h3>
                    <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                </div>
                <div className={style.modalBtnBx}>
                    <button
                    className={style.modalCancel}
                    onClick={() => {
                        setShowDeleteModal(false)
                        document.body.style.overflow = 'auto'
                    }}
                    >no, cancel</button>
                    <button
                    className={style.modalDelete}
                    onClick={() => {
                        setShowDeleteModal(false);
                        dispatch(deletePost(toDeleteId))
                        document.body.style.overflow = 'auto'
                    }}
                    >yes, delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal
