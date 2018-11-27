/**
 * Created by corentin on 27/11/2018.
 */
import React from 'react';
import Proptypes from 'prop-types';
import Reporting from "../../Components/Reporting/reporting";
import ButtonArray from '../../Components/ButtonArray/buttonArray';
import Modal from '../../Components/Modal/modal';

const ReportScene = (props) => {
  const {
    packArray,
    show,
    showModal,
    hideModal,
    modalTitle,
    valueLabel,
    handleLabel,
    valuePrice,
    handlePrice,
    handleSubmit,
    myPacks,
    isUpdating,
    clickOnUpdate,
    clickOnDelete,
    handleButton,
    updatePack,
    confirm,
    hideConfirm,
    confirmDelete
  } = props;
  return (
    <div className="containerMyPacks">
      <h2 className="reportTitle">Préviens nous dès que tu fais une vente</h2>
      <ButtonArray handleButton={handleButton} showModal={showModal}
                   array={packArray}/>
      <Reporting myPacks={myPacks}
                 isUpdate
                 updatePack={clickOnUpdate}
                 deletePack={clickOnDelete}
      />
      <Modal show={show} handleClose={hideModal}>
        <form className="formContainer"
              onSubmit={isUpdating ? updatePack : handleSubmit}>
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
      <Modal show={confirm} handleClose={hideConfirm}>
        <div className="confirmContainer">
        <h3 className="confirmMessage">Êtes-vous certain de vouloir supprimer cette vente ?</h3>
          <div className="confirmButtons">
            <button onClick={hideConfirm} className="confirmCancelButton">Annuler</button>
            <button onClick={confirmDelete} className="confirmValidateButton">Valider</button>
          </div>
        </div>
      </Modal>
    </div>
  )
};

ReportScene.proptypes = {
  packArray: Proptypes.array.isRequired,
  myPacks: Proptypes.array.isRequired,
  clickOnUpdate: Proptypes.func.isRequired,
  clickOnDelete: Proptypes.func.isRequired,
  updatePack: Proptypes.func.isRequired,
  isUpdating: Proptypes.bool.isRequired,
  myPackToUpdate: Proptypes.object.isRequired,
  showModal: Proptypes.func.isRequired,
  hideModal: Proptypes.func.isRequired,
  show: Proptypes.bool.isRequired,
  valueLabel: Proptypes.string,
  handleLabel: Proptypes.func.isRequired,
  valuePrice: Proptypes.string.isRequired,
  handlePrice: Proptypes.func.isRequired,
  handleSubmit: Proptypes.func.isRequired,
  handleButton: Proptypes.func.isRequired
};

export default ReportScene;