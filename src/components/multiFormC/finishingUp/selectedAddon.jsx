import React from 'react'
import { useSelector } from 'react-redux'
import { selectedAddons } from '@/AllSlices/addonSlice/addonSlice';
import style from './plan.module.css'

function SelectedAddon() {

    const choosenAddons = useSelector(selectedAddons)

    const displayChoosenAddons = choosenAddons.map(data => (
        <ul key={data.addonName}>
            <li className={style.addonName}>
                <p>{data.addonName}</p>
                <p>{`$${data.addonPrice}/${data.type}`}</p>
            </li>
        </ul>
    ))

    return (
        <div>
            {displayChoosenAddons}
        </div>
    )
}

export default SelectedAddon
