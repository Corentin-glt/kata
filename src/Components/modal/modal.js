import React from 'react';

export default function Modal({ handleClose, show, children}) {
  const modalContainer = show ? "modal displayBlock" : "modal displayNone";
  return (
    <div onClick={handleClose} className={modalContainer}>
      <section onClick={(e) => e.stopPropagation()} className="modalSection">
        {children}
      </section>
    </div>
  );
};