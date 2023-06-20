import React from 'react';
import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ imageURL, tags }) => {
  return (
    <Item>
      <Image src={imageURL} alt={tags} loading="lazy" />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
};

export default ImageGalleryItem;
