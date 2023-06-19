import PropTypes from 'prop-types';

const ImageErrorView = ({ imageURL, alt, width, message }) => {
  return (
    <div role="alert">
      <img src={imageURL} width={width} alt={alt} />
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
