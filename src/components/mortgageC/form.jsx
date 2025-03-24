'use client'
import { useFormSetup } from '@/hooks'
import { useEffect, useState} from 'react'
import {z} from 'zod'
import Image from "next/image"
import Empty from './empty'
import style from './mortgage.module.css'
import Result from './result'

const schema = z.object({
    amount: z
    .preprocess(
        (value) => (value === '' ? undefined : Number(value)),
        z.number({
            required_error: 'amount is required',
            invalid_type_error: 'Numbers only'
        })
        .min(10000, "Min amount is 10000")
        .max(300000, "Max amount is 300000")
    ),
    
    term: z
    .preprocess(
      (value) => (value === "" ? undefined : Number(value)),
        z.number({
          required_error: 'Term is required',
          invalid_type_error: "Numbers Only", 
        })
        .positive("Mortgage term must be a positive number")
        .max(25, "Term must be not be above 25 years")
    ),

    interest: z.preprocess(
        (value) => (Number(value)),
        z.number()
    ),

    type: z.enum(['repayment', 'interestOnly'],  {
        errorMap: () => ({ message: 'Select mortgage type' })
    })
})

function Form() {
    const [loanAmount, setLoanAmount] = useState()
    const [annualRate, setannualRate] = useState()
    const [interestRate, setInterestRate] = useState()
    const [mortgageType, setMortgageType] = useState()

    const {register, handleSubmit, watch, setValue, reset, formState: {errors, isSubmitSuccessful}} = useFormSetup( 
        schema,
        {
            amount: '10000',
            term: '25',
            interest: '5.25',
            type: 'repayment'
        }
    )

    // useForm({
    //     defaultValues: {
    //         amount: '10000',
    //         term: '25',
    //         interest: '5.25',
    //         type: 'repayment'
    //     },
    //     resolver: zodResolver(schema),
    //     mode: 'onChange',
    // })

    const trackAmount = watch('amount')
    
    useEffect(() => {
        const newInterest = parseFloat(trackAmount) >= 150000 ? 7.25 : 5.25;
        setValue('interest', newInterest)
    }, [trackAmount])

    const formSubmit = (data) => {
        setLoanAmount(data.amount)
        setannualRate(data.term)
        setInterestRate(data.interest)
        setMortgageType(data.type)   
    }

    const resetForm = () => {
        reset();
    }

    const calculateMortgage = (principal, annualRate, interestRate) => {
        const monthlyRate = annualRate / 100 / 12;
        const totalPayments = interestRate * 12;

        return (
            principal *
            (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
            (Math.pow(1 + monthlyRate, totalPayments) - 1)
        ).toFixed(2);
    }
    const monthlyRepay = calculateMortgage(loanAmount, annualRate, interestRate)
    
    function calculateTotalPayment(principal, annualRate, interestRate) {
        const monthlyRate = annualRate / 100 / 12;
        const totalPayments = interestRate * 12;

        const compoundFactor = Math.pow(1 + monthlyRate, totalPayments);
    
        const monthlyPayment = principal * (monthlyRate * compoundFactor) / (compoundFactor - 1);
    
        const totalPayment = monthlyPayment * totalPayments;
    
        return totalPayment.toFixed(2);
    };
    const totalRep = calculateTotalPayment(loanAmount, annualRate, interestRate)

    const onlyInterest = Math.ceil(totalRep - loanAmount)
    

    return(
        <div className={style.formWrapper}>
            <div className={style.myForm}>
                <div className={style.formTop}>
                    <p>Mortgage Calculator</p>
                    <button onClick={resetForm}>Clear All</button>
                </div>
                <form action="" onSubmit={handleSubmit(formSubmit)} className={style.form}>
                    <label htmlFor="amount" className={style.label}>Mortgage Amount</label><br/>
                    <div className={`${style.inputWrap} ${errors.amount ? style.errorborder : ''}`}>
                        <span className={`${style.sign} ${errors.amount ? style.errorsign : ''}`}>£</span>
                        <input
                        {...register('amount')}
                        type="text" 
                        name="amount" 
                        id="amount" 
                        />
                    </div>
                    {errors.amount && <p className={style.error}>{errors.amount.message}</p>}
                    <br />
                    <div className={style.options}>
                        <div>
                            <label htmlFor="term" className={style.label}>Mortgage Term</label><br />
                            <div className={`${style.inputWrap} ${errors.term ? style.errorborder : ''}`}>
                                <input 
                                {...register('term')}
                                type="text" 
                                id="term" 
                                name="term"
                                />
                                <span className={`${style.sign} ${errors.term ? style.errorsign : ''}`}>Years</span>
                            </div>
                            {errors.term && 
                            <p className={style.error}>{errors.term.message}</p>}
                        </div>
                        
                        <div>
                            <label htmlFor="interest" className={style.label}>Interest Rate</label><br />
                            <div className={`${style.inputWrap} ${errors.interest ? style.errorborder : ''}`}>
                                <input 
                                {...register('interest')}
                                type="text" 
                                id="interest" 
                                name="interest"
                                readOnly
                                />
                                <span className={style.sign}>%</span>
                            </div>
                            {errors.interest && <p className={style.error}>{errors.interest.message}</p>}
                        </div>
                    </div>
                    <br />
                    <div>
                        <div 
                        className={`${style.inputWrap} ${style.radioWrap}`}
                        >   
                            <input 
                            {...register('type')}
                            className='type'
                            type="radio" 
                            name="mortgageType" 
                            id='repayment'
                            value='repayment'
                            checked={watch('type') === 'repayment'}
                            onChange={() => setValue('type', 'repayment')}
                            />
                            <label htmlFor="repayment"></label>
                            <span className={style.typeSpan}>Repayment</span>
                        </div>
                        <div className={`${style.inputWrap} ${style.radioWrap}`}
                        // onClick={checker}
                        >
                            <input 
                            {...register('type')}
                            className='type'
                            type="radio" 
                            name="mortgageType" 
                            value='interestOnly'
                            id='interestOnly'
                            checked={watch('type') === 'interestOnly'}
                            onChange={() => setValue('type', 'interestOnly')}
                            />
                            <label htmlFor="interestOnly"></label>
                            <span className={style.typeSpan}>Interest Only</span>
                        </div>
                        {errors.type && <p className={style.error}>{errors.type.message}</p>}
                    </div><br />
                    <button className={style.calcBtn}>
                        <Image src='./images/mortgageMedia/icon-calculator.svg' alt="" width='30' height='30'/>
                        Calculate Repayment
                    </button>
                </form>
            </div>
            <div className={style.leftdiv}>
                {isSubmitSuccessful ?
                 <Result 
                 calcMonth={monthlyRepay} 
                 calcTotal={totalRep}
                 onlyInterest={onlyInterest}
                 mortgageType={mortgageType}/> : 
                 <Empty />}
            </div>
        </div>
        
    )
}

export default Form