import Addons from '../addons/addons';
import Personal from '../personal/personal'
import Plan from '../plan/plan'
import Success from '../success/success';
import Summary from '../summary/summary';
import style from './formsBox.module.css'

function FormsBox({display, setDisplay, togglePlan, setTogglePlan}) {

    let Component;
    switch (display) {
        case 1:
            Component = 
            <Personal 
            setDisplay={setDisplay}/>;
            break;
        case 2:
            Component = 
            <Plan 
            display={display}
            setDisplay={setDisplay}
            togglePlan={togglePlan}
            setTogglePlan={setTogglePlan}
            />;
            break;
        case 3:
            Component = 
            <Addons
            display={display}
            toggPlan={togglePlan}
            setDisplay={setDisplay} />;
            break;
        case 4:
            Component = 
            <Summary
            display={display}
            setDisplay={setDisplay}
            />;
            break;
        case 5:
            Component = 
            <Success/>;
            break;
    }

    return <div className={style.formBox}>{Component}</div>;
}

export default FormsBox