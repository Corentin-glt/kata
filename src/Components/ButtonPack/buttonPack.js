/**
 * Created by corentin on 27/11/2018.
 */
import React from 'react';
import Proptypes from 'prop-types';

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
      <div className="priceButtonPack">{props.price}</div>
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
  return(
    <div className="groupButtonPack">
      <div className="updateButtonPack"
           onClick={() => props.updatePack(props.id)}
      >
      </div>
      <div className="deleteButtonPack"
           onClick={() => props.deletePack(props.id)}
      >
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