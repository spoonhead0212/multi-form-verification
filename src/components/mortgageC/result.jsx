import style from './mortgage.module.css'
function Result({calcMonth, calcTotal, onlyInterest, mortgageType}) {
    
    return(
        <div className={style.resultdiv}>
            <h2>Your results</h2>
            <p>Your results are shown below based on the information you provided. 
            To adjust the results, edit the form and click “calculate repayments” again.</p>
            <div className={style.resultInner}>
                <div className={style.inner}>
                    <p>{mortgageType === 'repayment' ? 'Your monthly repayments' : 'Your total interest repayment'}</p>
                    {mortgageType === 'repayment' ? 
                    <p className={style.total}>{`£${Number(calcMonth).toLocaleString()}`}</p> :
                    <p className={style.total}>{`£${Number(onlyInterest).toLocaleString()}`}</p>}
                    <div className={style.line}></div>
                </div>
                <div className={style.inner2}>
                    <p>Total you'll repay over term</p>
                    <p className={style.innerTot}>{`$${Number(calcTotal).toLocaleString()}`}</p>
                </div>
            </div>
        </div>
    )
}

export default Result