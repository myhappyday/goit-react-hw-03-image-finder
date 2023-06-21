import React from 'react';
import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ imageURL, tags, largeImageURL, onImageClick }) => {
  return (
    <Item
      onClick={event => {
        event.preventDefault();
        onImageClick({ largeImageURL, tags });
      }}
    >
      <Image src={imageURL} alt={tags} loading="lazy" />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
