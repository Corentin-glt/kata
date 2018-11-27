/**
 * Created by corentin on 27/11/2018.
 */
import React from 'react';
import Proptypes from 'prop-types';
import Reporting from "../../Components/reporting/reporting";
import ButtonArray from '../../Components/buttonArray/buttonArray';
import Modal from '../../Components/modal/modal';

const ReportScene = (props) => {
  const {packArray, show, showModal, hideModal, modalTitle, valueLabel, handleLabel, valuePrice, handlePrice, handleSubmit} = props;
  return (
    <div className="containerMyPacks">
      <h2 className="reportTitle">Préviens nous dès que tu fais une vente</h2>
      <ButtonArray showModal={showModal} array={packArray}/>
      <Reporting myPacks={props.myPacks}
                 isUpdate
                 updatePack={props.updateMyPack}
                 deletePack={props.deleteMyPack}
      />
      <Modal show={show} handleClose={hideModal}>
        <form className="formContainer" onSubmit={handleSubmit}>
          <h3 className="modalTitle">{modalTitle}</h3>
          <label className="valueLabel">
            Label
          </label>
          <textarea className="inputLabel" value={valueLabel}
                    onChange={handleLabel}/>
          <label className="valueLabel">
            Prix
          </label>
          <input className="inputPrice" type="number" value={valuePrice}
                 onChange={handlePrice}/>

          <input className="validateButton" type="submit" value="Valider"/>
        </form>
      </Modal>
    </div>
  )
};

ReportScene.proptypes = {
  packArray: Proptypes.array.isRequired,
  myPacks: Proptypes.array.isRequired,
  myPackToUpdate: Proptypes.object.isRequired,
  updateMyPack: Proptypes.func.isRequired,
  deleteMyPack: Proptypes.func.isRequired,
};

export default ReportScene;