'use client'
import style from './plan.module.css'
import Monthly from '../plantype/month'
import Yearly from '../plantype/year'
import {z} from 'zod'
// import { useFormSetup } from '@/hooks'
import { useDispatch } from 'react-redux'
// import { addPlan } from '@/AllSlices/planSlice/planSlice'
import { useFormSetup } from '../../../hooks'
import { addPlan } from '../../../AllSlices/planSlice/planSlice'

const schema = z.object({
    plan: z
    .enum(['arcade', 'advanced', 'pro'], {
        errorMap: () => ({message: 'Pick a plan'})
    })
})


function Plan({setDisplay, togglePlan, setTogglePlan, display}) {

    const dispatch = useDispatch()
    
    const plan = 'plan'

    const {register, handleSubmit, watch, setValue, formState: {}} = useFormSetup(
        schema, 
        {}
    )
    

    function myPlan(data, price) {
        const updatedPlan = {
            ...data,
            price: price,
            type: togglePlan ? "yr" : "mo",
            typeFull: togglePlan ? "Yearly" : "Monthly",
            togglePlan: togglePlan,
        };
        dispatch(addPlan(updatedPlan))
    }

    const handlePlan = (data) => {
        let price = 0;
        if (data.plan === "arcade") {
        price = togglePlan ? 90 : 9;
        } else if (data.plan === "advanced") {
        price = togglePlan ? 120 : 12;
        } else if (data.plan === "pro") {
        price = togglePlan ? 150 : 15;
        }
        
        myPlan(data, price)
        setDisplay(prev => prev + 1)
    }

    const toggler = () => {
        setTogglePlan(!togglePlan)
    }

    const handlePreviousStep = () => {
        setDisplay(display - 1)
    }

    return(
        <form action="" 
        onSubmit={handleSubmit(handlePlan)}
        style={{width: '85%'}}
        >
            <h1 className='heading'>Select Your Plan</h1>
            <p className='sub-head'>You have the option of monthly and yearly billing</p>
            <div>
                {togglePlan ? 
                <Yearly 
                 reg={register}
                 plan={plan}
                 watch={watch}
                 setValue={setValue}
                /> : 
                <Monthly 
                 reg={register} 
                 plan={plan}
                 watch={watch}
                 setValue={setValue}
                />}
           </div>
            <div className={style.planToggle}>
                <span className={`${togglePlan ? null : style.planColor}`}>Monthly</span>
                <label className={style.switch}>
                    <input
                    type="checkbox" 
                    name="switchPlan" 
                    checked={togglePlan}
                    onChange={toggler}
                    />
                    <span className={style.slider}></span>
                </label>
                <span className={`${togglePlan ? style.planColor : null}`}>Yearly</span>
            </div>
            <div className='btn-box'>
                <button 
                onClick={handlePreviousStep}
                className='btn'
                >Back</button>
                <button
                type="submit"
                className='btn'
                >Next</button>
            </div>
        </form>
    )
}
export default Plan