'use client'
import { useSelector } from "react-redux";
// import { selectedPlan } from "@/AllSlices/planSlice/planSlice";
import style from './plan.module.css'
import { selectedPlan } from "../../../AllSlices/planSlice/planSlice";

function SelectedPlan( {setDisplay} ) {

    const choosenPlan = useSelector(selectedPlan)

    const changePlan = () => {
        setDisplay(2)
    }

    return (
        <div className={style.selectedPlan}>
            <div className={style.selectedPlan__plan}>
                <p>{choosenPlan.plan}</p>
                <button onClick={changePlan}
                className={style.changeBtn}>Change</button>
            </div>
            <p className={style.selectedPlan__price}>{`$${choosenPlan.price}/${choosenPlan.type}`}</p>
        </div>
    )
}

export default SelectedPlan
