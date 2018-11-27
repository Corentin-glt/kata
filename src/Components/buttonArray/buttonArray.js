import React from 'react';


export default function ButtonArray(props) {
  const {array, showModal} = props;
  const row1 = [], row2 = [];
  array.forEach((item, i) => {
    if (i < 3) {
      row1.push(
        <button className="buttonArray">
          <label className="buttonArrayTitle">Pack {item.name}</label>
          <label className="buttonArrayPrice">{item.price}€</label>
        </button>
      );
    } else {
      row2.push(
        <button className="buttonArray">
          <label className="buttonArrayTitle">Pack {item.name}</label>
          <label className="buttonArrayPrice">{item.price}€</label>
        </button>
      );
    }
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
  )
}