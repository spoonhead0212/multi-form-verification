'use client'
import style from './success.module.css'

import React from 'react'

function Success() {
    return (
        <div className={style.success} style={{width: '85%'}}>
            <img src="images/multiFormMedia/icon-thank-you.svg" alt="" />
            <h1>Thank You!</h1>
            <p>Thanks for confirming your subscription! we hope you have fun using our platform. If you ever need support please feel free to email us @support@loremgaming.com</p>
        </div>
    )
}

export default Success
