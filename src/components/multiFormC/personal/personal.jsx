'use client'
import style from './personal.module.css'
import { useFormSetup } from '@/hooks'
import {z} from 'zod'

const schema = z.object({
    name: z
    .string()
    .min(1, 'Name is required')
    .max(10, 'Invalid name'),
    email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email')
    .refine(value => value.endsWith('@gmail.com'), {
        message: 'Invalid email',
    }),
    telephone: z
    .preprocess(
        (value) => (value === '' ? undefined : Number(value)),
        z
        .number({
            required_error: "Telephone is required",
            invalid_type_error: "Only numbers are allowed",
        })
        .positive('Number must be a positive number')
    )
})

function Personal({setDisplay}) {

    const {register, handleSubmit, formState: {errors}} = useFormSetup(
        schema,
        {},
    )

    const onSubmit = () => {
        setDisplay(prev => prev + 1)
    }

    return(
        <div style={{width: '85%'}}>
            <h1 className='heading'>Personal info</h1>
            <p className='sub-head'>Please provide your name, email address, and phone number.</p>
            <form action="" 
            onSubmit={handleSubmit(onSubmit)}
            className={style.personal}
            >
                <div className={style.fieldBox}>
                    <div className={style.alert}>
                        <label htmlFor="name">Name</label>
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <input
                    {...register('name')}
                     type="text" 
                     name="name" 
                     id="name" 
                    //  value="name" 
                     placeholder="e.g. Stephen King"
                    />
                </div>
                <div className={style.fieldBox}>
                    <div className={style.alert}>
                        <label htmlFor="email">Email Address</label>
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <input 
                     {...register('email')}
                     type="email" 
                     name="email" 
                     id="email" 
                    //  value="email" 
                     placeholder="e.g. stephenking@lorem.com"
                    />
                </div>
                <div className={style.fieldBox}>
                    <div className={style.alert}>
                        <label htmlFor="number">Phone Number</label>
                        {errors.telephone && <p>{errors.telephone.message}</p>}
                    </div>
                    <input
                     {...register('telephone')}
                     type="text" 
                     id="phone-number" 
                    //  value="Phone number" 
                     placeholder="e.g. +1 234 567 890"
                    />
                </div>
                <div className={style.btnBox}>
                    <button 
                    type='submit'
                    className='btn'
                    >Next Step</button>
                </div>
            </form>
        </div>
    )
}

export default Personal