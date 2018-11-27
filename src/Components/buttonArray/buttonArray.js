import React from 'react';


export default function ButtonArray(props) {
  return (
    <div className="buttonArrayContainer">
      {props.array.map(item => {
        return (
          <div className="buttonContainer">
            <button className="buttonArray">
              <label className="buttonArrayTitle">Pack {item.name}</label>
              <label className="buttonArrayPrice">{item.price}€</label>
            </button>
          </div>
        )
      })
      }
      <div className="buttonContainerOther">
        <button className="buttonArrayOther">
          <label className="buttonArrayTitle">Autre</label>
        </button>
      </div>
    </div>
  )
}