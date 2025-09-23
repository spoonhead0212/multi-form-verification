'use client'
import { useSelector } from "react-redux"
import { RootState } from "../../../app/store/store-types";
import ExtensionCard from "../card/extensioncard";
import { extensionShape } from "../types/type";
import style from './displayExtensions.module.css'

interface themeProps {
    theme: 'light' | 'dark';
}

function DisplayExtension({theme}: themeProps) {

    const filteredExtendos: extensionShape[] = useSelector((state: RootState) => state.extensionList.extensions)
    // console.log(filteredExtendos);
    
    if (filteredExtendos.length === 0) {
        return <p>Press All to reload all extensions</p>
    }
    
    return (
        <div className={style.Wrapper}>
            {filteredExtendos.map(filter => (
                <ExtensionCard key={filter.id} filter={filter}/>
            ))}
        </div>
    )
}

export default DisplayExtension
