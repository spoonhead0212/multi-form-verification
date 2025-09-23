'use client'
import { useDispatch } from "react-redux";
import { showAllExtensions, activeExtensions, inactiveExtensions } from '../../../AllSlices/extensionSlice/extensionSlice'
import style from './extensionList.module.css'

interface themeProps {
    theme: 'light' | 'dark';
}

function ExtensionList({theme}: themeProps) {

    
    const dispatch = useDispatch()
    return (
      <div className={style.extListBox}>
        <p>Extensions List</p>
        <ul className={style.fiterBtnsBox}>
          <li className={style.filterExt}>
              <button
              onClick={() => dispatch(showAllExtensions())}
              >All</button>
          </li>
          <li className={style.filterExt}>
              <button
              onClick={() => dispatch(activeExtensions())}
              >Active</button>
          </li>
          <li className={style.filterExt}>
              <button
              onClick={() => dispatch(inactiveExtensions())}
              >Inactive</button>
          </li>
          
        </ul>
      </div>
    )
}

export default ExtensionList
