// import { useFormSetup } from "@/hooks"
import { useFormSetup } from "../../../hooks"
import { useEffect} from "react"
import {z} from 'zod'
import style from './addons.module.css'
import { useDispatch, useSelector } from "react-redux"
// import { addAddons } from "@/AllSlices/addonSlice/addonSlice"
// import { selectedPlan } from "@/AllSlices/planSlice/planSlice"
import { addAddons } from "../../../AllSlices/addonSlice/addonSlice"
import { selectedPlan } from "../../../AllSlices/planSlice/planSlice"

const schema = z.object({
    addon: z
    .array(z.string())
})


function Addons({setDisplay, display}) {


    const toggleState = useSelector(selectedPlan)
    const currentToggleState = toggleState.togglePlan
    
    

    const dispatch = useDispatch()

    const {register, handleSubmit, setValue, watch} = useFormSetup(
        schema,
        {}
    )

    useEffect(() => {
        setValue('addon', ['online service'])
    }, [setValue])

    const addonPrices = {
        "online service": { yearly: 10, monthly: 1 },
        "larger storage": { yearly: 20, monthly: 2 },
        "customizable profile": { yearly: 20, monthly: 2 }
    };

    function myAddons(data) {
        
        const updatedAddon = data
        .filter(dt => 
            dt === 'online service' || 
            dt === 'larger storage' || 
            dt === 'customizable profile'
        )
        .map(dt => ({
            addonName: dt,
            addonPrice: currentToggleState ? addonPrices[dt].yearly : addonPrices[dt].monthly,
            type: currentToggleState ? "yr" : "mo",
            typeFull: currentToggleState ? "Yearly" : "Monthly",
        }));
        dispatch(addAddons(updatedAddon))
    }

    const addonFunc = (data) => {
        myAddons(data.addon)
        setDisplay(prev => prev + 1)
    }

    const handlePreviousStep = () => {
        setDisplay(display - 1)
    }

    return(
        <form action="" 
        onSubmit={handleSubmit(addonFunc)}
        style={{width: '85%'}}
        >
            <h1 className="heading">Pick Add-ons</h1>
            <p className="sub-head">Add-ons helps expand your gaming experience</p>
            <div className={style.addonBox}>
                <label 
                htmlFor="onlineService"
                className={style.addonLabel}
                >
                    <input
                    {...register('addon')}
                    defaultChecked={true}
                    value='online service'
                    type="checkbox"
                    id="onlineService" 
                    readOnly
                    />
                    <div className={style.addonContent}>
                        <div className={style.addonContent__text}>
                            <p>Online Service</p>
                            <p>Access to multiplayer game</p>
                        </div>
                        <p className={style.addonPrice}>{`$+${currentToggleState ? 10 : 1}
                            /${currentToggleState ? "yr" : "mo"}`}
                        </p>
                    </div>
                </label>
                <label 
                htmlFor="largerStorage"
                className={style.addonLabel}
                >
                    <input 
                    {...register('addon')}
                    value='larger storage'
                    type="checkbox" 
                    id="largerStorage" 
                    />
                    <div className={style.addonContent}>
                        <div className={style.addonContent__text}>
                            <p>Larger storage</p>
                            <p>Extra 1TB of cloud saved</p>
                        </div>
                        <p className={style.addonPrice}>{`$+${currentToggleState ? 20 : 2}
                            /${currentToggleState ? "yr" : "mo"}`}
                        </p>
                    </div>
                </label>
                <label 
                htmlFor="customizableProfile"
                className={style.addonLabel}>
                    <input 
                    {...register('addon')}
                    value='customizable profile'
                    type="checkbox" 
                    id="customizableProfile" 
                    />
                    <div className={style.addonContent}>
                        <div className={style.addonContent__text}>
                            <p>Customizable Profile</p>
                            <p>Custom theme on your profile</p>
                        </div>
                        <p className={style.addonPrice}>{`$+${currentToggleState ? 20 : 2}
                            /${currentToggleState ? "yr" : "mo"}`}
                        </p>
                    </div>
                </label>
            </div>
            <div className='btn-box'>
                <button 
                onClick={handlePreviousStep}
                className="btn"
                >Back</button>
                <button 
                type="submit"
                className="btn"
                >Next</button>
            </div>
        </form>
    )
}

export default Addons