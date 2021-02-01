import React, { useState } from "react";
import "./ModalBox.scss";

const ModalBoxV2 = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <button className="open-modal" onClick={() => setState(true)}>
        Open modal box!
      </button>

      {state && (
        <div className="modal-box">
          <div className="modal-box-body">
            <h1>Box title</h1>
            <p>Here's message!</p>
            <button onClick={() => setState(false)}>Close modal box</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalBoxV2;
