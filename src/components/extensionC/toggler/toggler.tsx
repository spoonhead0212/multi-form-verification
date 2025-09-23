import { useDispatch } from 'react-redux';
import { toggleActive } from '../../../AllSlices/extensionSlice/extensionSlice';
import style from './toggler.module.css'

interface toggleShape {
    label?: string;
    checked: boolean;
    id: number;
}

const Toggler: React.FC<toggleShape> = ({
    // label = 'Toggle',
    checked,
    id,
}) => {

    
  const dispatch = useDispatch()

    function handleToggle(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(toggleActive(id))
    }

    return (
        <div className={style.toggleSwitch}>
            <input 
            className={style.toggleInput} 
            checked={checked} 
            onChange={handleToggle}
            id={`toggle-${id}`}
            type="checkbox" />
            <label className={style.toggleLabel} htmlFor={`toggle-${id}`}></label>
        </div>
    )
}

export default Toggler
