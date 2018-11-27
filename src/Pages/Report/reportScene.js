/**
 * Created by corentin on 27/11/2018.
 */
import React from 'react';
import Proptypes from 'prop-types';
import ButtonArray from '../../Components/buttonArray/buttonArray';
import Modal from '../../Components/modal/modal';

const ReportScene = (props) => {
  const {packArray, show, showModal, hideModal, modalTitle, valueLabel, handleLabel, valuePrice, handlePrice, handleSubmit} = props;
  return (
    <div>

      <h2 className="reportTitle">Préviens nous dès que tu fais une vente</h2>
      <ButtonArray showModal={showModal} array={packArray}/>
      <Modal show={show} handleClose={hideModal}>
        <form onSubmit={handleSubmit}>
          <h3>{modalTitle}</h3>
          <label>
            Label
            <input type="text" value={valueLabel} onChange={handleLabel}/>
          </label>
          <label>
            Prix
            <input type="number" value={valuePrice} onChange={handlePrice}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </Modal>
    </div>
  )
};

ReportScene.proptypes = {};

export default ReportScene;