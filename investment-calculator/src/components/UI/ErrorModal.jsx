/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import './ErrorModal.css';

function ErrorModal({ title, message, onClose }) {
  return (
    <>
      {ReactDOM.createPortal(
        <div className='overlay' onClick={onClose} />,
        document.getElementById('overlay-root')
      )}

      {ReactDOM.createPortal(
        <Card className='modal'>
          <header className='header'>
            <h2>{title}</h2>
          </header>
          <div className='content'>
            <p>{message}</p>
          </div>
          <footer className='actions'>
            <Button className='btn' onClick={onClose}>ОK</Button>
          </footer>
        </Card>,
        document.getElementById('modal-root')
      )}
    </>
  );
}

export default ErrorModal;
