import PropTypes from 'prop-types';

const ImageErrorView = ({ imageURL, alt, message }) => {
  return (
    <div role="alert">
      <img src={imageURL} width="300" alt={alt} />
      <p>{message}</p>
    </div>
  );
};

ImageErrorView.propTypes = {
  imageURL: PropTypes.string,
  alt: PropTypes.string,
  massage: PropTypes.string,
};

export default ImageErrorView;
