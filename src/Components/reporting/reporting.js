/**
 * Created by corentin on 27/11/2018.
 */
import React from 'react';
import Proptypes from 'prop-types';
import ButtonPack from "../ButtonPack/buttonPack";

function Reporting(props) {
  return (
    <div className="containerReporting">
      <div className="titleContainerReporting">
        {
          props.isUpdate ?
            <div className="titleUpdateTrue">Reporting</div>
            :
            <div className="titleUpdateFalse">
              {props.isUpdate ? props.myPacks.length : totalSale(props)}
              {props.myPacks.length > 1 ? " ventes" : " vente"}
            </div>
        }
        <div className={props.isUpdate ?
          "priceUpdateTrue" : "priceUpdateFalse"}
        >
          {totalEuros({...props})} €
        </div>
      </div>
      {arrayPack(props)}
    </div>
  )
}

function arrayPack(props) {
  return (
    <div className="arrayMyPacks">
      {props.myPacks.length > 0 ?
        props.myPacks.map((item, i) => {
        return (
          <ButtonPack title={item.title}
                      price={item.price}
                      key={i}
                      id={item.id}
                      index={props.isUpdate ? null : item.numberOfTotal}
                      isUpdate={props.isUpdate}
                      updatePack={ props.isUpdate ? props.updatePack : null}
                      deletePack={props.isUpdate ? props.deletePack : null }
          />
        )
      }) :
        'Désolé, vous n\'avez toujours de vente'
      }
    </div>
  )
}
function totalSale(props) {
  let total = 0;
  props.myPacks.forEach(item => {
    total = total + item.numberOfTotal
  });
  return total;
}

function totalEuros(props) {
  let total = 0;
  props.myPacks.forEach(item => {
    total = total + item.price
  });
  return total;
}

Reporting.proptypes = {
  myPacks: Proptypes.array.isRequired,
  isUpdate: Proptypes.bool.isRequired,
  updatePack: Proptypes.func,
  deletePack: Proptypes.func,
};

export default Reporting;