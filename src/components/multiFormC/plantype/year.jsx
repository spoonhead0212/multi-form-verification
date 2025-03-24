import style from './planType.module.css'
import Image from 'next/image'

function Yearly({
    reg,
    plan,
    setValue, 
    watch
}) {

return(
    <>
        <div className={style.planning}>
            <label 
            htmlFor="arcade"
            className={style.planCard}
            >
                <div className={style.planCard__content}>
                    <Image 
                        src='/images/MultiFormMedia/icon-arcade.svg'
                        width={50}
                        height={50}
                        alt='plan-icon'
                    />
                    <div className={style.planText}>
                        <p>Arcade</p>
                        <p>$90/yr</p>
                    </div>
                </div>
                <input 
                {...reg(plan)}
                type="radio" 
                id="arcade" 
                name='plan'
                value='arcade'
                defaultChecked={true}
                // checked={watch(plan) === 'arcade'}
                onChange={() => setValue(plan, 'arcade')}
                />
            </label>
            <label 
            htmlFor="advanced"
            className={style.planCard}
            >
                <div className={style.planCard__content}>
                    <Image 
                        src='/images/MultiFormMedia/icon-advanced.svg'
                        width={50}
                        height={50}
                        alt='plan-icon'
                    />
                    <div className={style.planText}>
                        <p>Advanced</p>
                        <p>$120/yr</p>
                    </div>
                </div>
                <input 
                {...reg(plan)}
                type="radio" 
                id="advanced" 
                name='plan'
                value='advanced'
                checked={watch(plan) === 'advanced'}
                onChange={() => setValue(plan, 'advanced')}
                />
            </label>
            <label 
            htmlFor="pro"
            className={style.planCard}
            >
                <div className={style.planCard__content}>
                    <Image 
                        src='/images/MultiFormMedia/icon-pro.svg'
                        width={50}
                        height={50}
                        alt='plan-icon'
                    />
                    <div className={style.planText}>
                        <p>Pro</p>
                        <p>$150/yr</p>
                    </div>
                </div>
                <input 
                {...reg(plan)}
                type="radio" 
                value='pro'
                id="pro" 
                name='plan'
                checked={watch(plan) === 'pro'}
                onChange={() => setValue(plan, 'pro')}
                />
            </label>
        </div>
    </>
)
}

export default Yearly