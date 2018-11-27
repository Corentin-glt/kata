import React from 'react';
import Proptypes from 'prop-types';


export default function ButtonArray(props) {
  const {array, showModal, handleButton} = props;
  const row1 = [], row2 = [];
  array.forEach((item, i) => {
    const elem = <button key={i} onClick={() => handleButton(item)} className="buttonArray">
      <label className="buttonArrayTitle">{item.title}</label>
      <label className="buttonArrayPrice">{item.price}€</label>
    </button>;
    i < 3 ? row1.push(elem) : row2.push(elem);
  });
  return (
    <div className="buttonArrayContainer">
      <div className="buttonRowContainer">{row1}</div>
      <div className="buttonRowContainer">{row2}</div>
      <div className="buttonRowContainer">
        <button onClick={showModal} className="buttonArray">
          <label className="buttonArrayTitle">Autre</label>
        </button>
      </div>
    </div>
  );
}

ButtonArray.prototypes = {
  showModal: Proptypes.func.isRequired,
  array: Proptypes.array.isRequired,
  handleButton: Proptypes.func.isRequired
};