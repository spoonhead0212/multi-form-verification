import React, { useState } from 'react'
import Image from 'next/image'
import { extensionShape } from '../types/type'
import Toggler from '../toggler/toggler';
import { removeExtension } from '../../../AllSlices/extensionSlice/extensionSlice';
import { useDispatch } from 'react-redux';
import style from './extensioncard.module.css'

interface Props {
  filter: extensionShape;
}

const ExtensionCard: React.FC<Props> = ({filter}) => {

  const dispatch = useDispatch()
  
  return (
    <div className={style.extensionCard}>
      <div className={style.cardTop}>
        <Image
        src={filter.logo}
        width={50}
        height={50}
        alt={`${filter.name} logo`}
        />
        <div className={style.cardTop_Text}>
            <h5>{filter.name}</h5>
            <p>{filter.description}</p>
        </div>
      </div>
      <div className={style.cardBottom}>
        <div
        className={style.removeBtnBox}
        >
          <button
          className={style.removeBtn}
          onClick={() => dispatch(removeExtension(filter.id))}
          >Remove</button>
        </div>
        <Toggler
        id={filter.id}
        checked={filter.isActive}
        />
      </div>
    </div>
  )
}

export default ExtensionCard
