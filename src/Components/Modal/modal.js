import React from 'react';
import Proptypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
library.add(faTimes);

export default function Modal(props) {
  const {handleClose, show, children} = props;
  const modalContainer = show ? "modal displayBlock" : "modal displayNone";
  return (
    <div onClick={handleClose} className={modalContainer}>
      <section onClick={(e) => e.stopPropagation()} className="modalSection">
        <FontAwesomeIcon className="closeModal" icon="times" onClick={handleClose}/>
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

