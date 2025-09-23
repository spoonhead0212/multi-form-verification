'use client'
import FormsBox from '../../components/multiFormC/formsBox/formsBox'
import Steps from '../../components/multiFormC/stepBox/stepBox'
// import FormsBox from "@/components/multiFormC/formsBox/formsBox"
// import Steps from "@/components/multiFormC/stepBox/stepBox"
import style from './module-step-form.module.css'
import { useState } from "react"

function MultiFormApp() {
    const [display, setDisplay] = useState(1)
    const [togglePlan, setTogglePlan] = useState(false)

    return(
        <div className={style.floor}>
            <div className={style.dashboard}>
                <Steps display={display}/>
                <FormsBox 
                display={display} 
                togglePlan={togglePlan}
                setTogglePlan={setTogglePlan}
                setDisplay={setDisplay}/>
            </div>
        </div>
    )
}

export default MultiFormApp