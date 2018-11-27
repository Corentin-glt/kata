import React from 'react';
import Proptypes from 'prop-types';

export default function Modal(props) {
  const {handleClose, show, children} = props;
  const modalContainer = show ? "modal displayBlock" : "modal displayNone";
  return (
    <div onClick={handleClose} className={modalContainer}>
      <section onClick={(e) => e.stopPropagation()} className="modalSection">

        {children}
      </section>
    </div>
  );
};

Modal.prototypes = {
  handleClose : Proptypes.func.isRequired,
  show: Proptypes.bool.isRequired,
  children: Proptypes.any
};

