import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

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
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">
          {/* {this.props.children} */}
          <img src={largeImageURL} alt={tags} />
          <p>{tags}</p>
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
