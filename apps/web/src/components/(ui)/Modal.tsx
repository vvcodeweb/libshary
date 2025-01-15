'use client';

import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  id: string;
}

const Modal = ({ children, id }: ModalProps) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box min-h-72 max-h-[75vh] overflow-y-auto">
        <div className="max-w-md">{children}</div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
