'use client'
import React, { useState } from 'react'
import style from './home.module.css'
import DisplayExtension from '../../components/extensionC/displayextentions/displayExtention'
import ExtensionList from '../../components/extensionC/extensionList/extensionList'
import ColorToggle from '../../components/extensionC/colorToggle/colorToggle'

function Extension() {

    const [theme, setTheme] = useState<'light' | 'dark'>('dark')

    const toggleTheme = () => {
      setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    return (
      <div className={`${theme === 'dark' ? style.darkBG : style.lightBG} ${style.box}`}>
        <div className={style.insideWrap}>
          <ColorToggle 
          toggleTheme={toggleTheme}
          theme={theme}/>
          <ExtensionList 
          theme={theme}
          />
          <DisplayExtension
          theme={theme}
          />
        </div>
      </div>
    )
}

export default Extension
