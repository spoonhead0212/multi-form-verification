import React from 'react'
import { useSelector } from "react-redux"
// import { selectedPlan } from "@/AllSlices/planSlice/planSlice"
// import { selectedAddons } from '@/AllSlices/addonSlice/addonSlice'
import { useState, useEffect } from 'react'
import style from './plan.module.css'
import { selectedPlan } from '../../../AllSlices/planSlice/planSlice'
import { selectedAddons } from '../../../AllSlices/addonSlice/addonSlice'

function Total() {
    const [AllSubTotal, setAllSubTotal] = useState([])
    const choosenPlan = useSelector(selectedPlan)
    const choosenAddons = useSelector(selectedAddons)
    const durationToggler = choosenPlan.togglePlan

    const totalAddonPrice = choosenAddons
    .map(sub => sub.addonPrice)
    .reduce((acc, cur) => acc + cur, 0);
    const totalplanPrice = choosenPlan.price;

    useEffect(() => {
        setAllSubTotal([totalAddonPrice, totalplanPrice].reduce((acc, cur) => acc + cur, 0))
    }, [totalAddonPrice, totalplanPrice])
    
    return (
        <div className={style.total}>
            <p>{`Total (per ${durationToggler ? 'Year' : 'Month'})`}</p>
            <p>{`+$${AllSubTotal}`}</p>
        </div>
    )
}

export default Total
