'use client'
import style from './mortgage.module.css'
import Image from "next/image"


function Empty() {
    return(
        <div className={style.emptyWrap}>
            <div className={style.emptyWrapInner}>
                <div className={style.imgBox}>
                    <Image src='./images/mortgageMedia/illustration-empty.svg' alt="" width='30' height='30'/>
                </div>
                <div>
                    <h1>Results shown here</h1>
                    <p>Complete the form and click “calculate repayments” to see what 
                    your monthly repayments would be.</p>
                </div>
            </div>
        </div>
    )
}

export default Empty