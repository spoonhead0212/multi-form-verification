import MortgageComp from "@/components/mortgageC/mortgage"
import style from './mortgageBody.module.css'

function MortgageApp() {
    return(
        <div className={style.mortgageAppBody}>
            <MortgageComp />
        </div>
        
    )
}

export default MortgageApp