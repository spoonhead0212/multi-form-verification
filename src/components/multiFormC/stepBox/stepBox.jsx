import style from './stepBox.module.css'
import StepsData from './steps'

function Steps( {display} ) {
    
    return(
        <div className={style.stepBox}>
            {StepsData.map((stepData) => (
                <div key={stepData.id} className={style.stepping}>
                    <p className={`${stepData.id <= display ? style.activeStep : null} ${style.stepStyle}`}>{stepData.id}</p>
                    <div className={style.stepBox_content}>
                        <p className={style.stepBox_step}>{stepData.step} {stepData.id}</p>
                        <p className={style.stepBox_name}>{stepData.info}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Steps