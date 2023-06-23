import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  Overlay,
  ModalWindow,
  ModalImage,
  ModalDescription,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      // Викликає метод закриття модалки, переданої як пропс з ImageGallery
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    // Закриття мрдалки при кліку на backdrop
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.modalData;
    // Виносимо модалку і рендеримо в портал для модалок в #modal-root
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>
          <ModalImage src={largeImageURL} alt={tags} />
          <ModalDescription>{tags}</ModalDescription>
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  modalData: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default Modal;
