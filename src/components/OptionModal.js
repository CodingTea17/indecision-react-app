import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleDismissModal}
    contentLabel="Selected Option"
  >
  <h3>Selected Option</h3>
  {props.selectedOption && <p>{props.selectedOption}</p>}
  <button onClick={props.handleDismissModal}>Okay</button>
  </Modal>
);

export default OptionModal;
