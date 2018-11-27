/**
 * Created by corentin on 27/11/2018.
 */
import React from 'react';
import Proptypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faTimes} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
library.add(faPen, faTimes);

function ButtonPack(props) {
  return (
    <div className="buttonPack">
      {
        !props.isUpdate ?
          <div className="indexButtonPack">{props.index}</div>
          :
          null
      }
      <div className="titleButtonPack">{props.title}</div>
      <div className={props.isUpdate ?
        "priceButtonPack" : "priceButtonPackFalse"}
      >
        {props.price} €
      </div>
      {
        props.isUpdate ?
          groupButtonPack({...props})
          :
          null
      }
    </div>
  )
}

function groupButtonPack(props) {
  return (
    <div className="groupButtonPack">
      <div className="updateButtonPack"
           onClick={() => props.updatePack(props.id)}
      >
        <FontAwesomeIcon
          icon="pen"
        />
      </div>
      <div className="deleteButtonPack"
           onClick={() => props.deletePack(props.id)}
      >
        <FontAwesomeIcon
          icon="times"
        />
      </div>
    </div>
  )
}

ButtonPack.proptypes = {
  title: Proptypes.string.isRequired,
  price: Proptypes.number.isRequired,
  isUpdate: Proptypes.bool.isRequired,
  index: Proptypes.number,
  id: Proptypes.string.isRequired,
  updatePack: Proptypes.func,
  deletePack: Proptypes.func,
};

export default ButtonPack;