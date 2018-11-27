import React from 'react';

export default function Modal({ handleClose, show, children}) {
  const modalContainer = show ? "modal displayBlock" : "modal displayNone";
  return (
    <div className={modalContainer}>
      <section className="modalSection">
        {children}
        <button >Valider</button>
      </section>
    </div>
  );
};