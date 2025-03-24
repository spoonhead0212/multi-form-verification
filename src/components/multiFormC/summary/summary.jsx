import { useSelector } from "react-redux";
import { selectedPlan } from "@/AllSlices/planSlice/planSlice";
import { selectedAddons } from "@/AllSlices/addonSlice/addonSlice";
import SelectedPlan from "../finishingUp/selectedPlan";
import SelectedAddon from "../finishingUp/selectedAddon";
import Total from "../finishingUp/total";
import style from './summary.module.css'

function Summary({setDisplay, display}) {

    const confirmForm = () => {
        setDisplay(display + 1)
    }

    const handlePreviousStep = () => {
        setDisplay(display - 1)
    }

    return(
        <div style={{width: '85%'}}>
            <h1 className="heading">Finishing up</h1>
            <p className="sub-head">Double check everything is ok before confirming</p>
            <div className={style.choiceBox}>
                <SelectedPlan setDisplay={setDisplay}/>
                <SelectedAddon />
            </div>
            <Total />
            <div className="btn-box">
                <button 
                onClick={handlePreviousStep}
                className="btn"
                >Back</button>
                <button 
                onClick={confirmForm}
                className="btn"
                >Confirm</button>
            </div>
        </div>
    )
}

export default Summary