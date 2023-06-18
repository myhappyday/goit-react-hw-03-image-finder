import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageURL, tags }) => {
  return (
    <li>
      <img src={imageURL} alt={tags} loading="lazy" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
