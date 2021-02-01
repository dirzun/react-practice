import React from "react";
import "./ModalBox.css";

class ModalBox extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <>
        <button
          className="open-modal"
          onClick={() => this.setState({ isOpen: true })}
        >
          Open modal box
        </button>

        {this.state.isOpen && (
          <div className="modal-box">
            <div className="modal-box-body">
              <h1>Box title</h1>
              <p>Here's message!</p>
              <button onClick={() => this.setState({ isOpen: false })}>
                Close modal box
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ModalBox;
