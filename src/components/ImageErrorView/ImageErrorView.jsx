// import errorImage from '../../images/1.jpg';
import PropTypes from 'prop-types';

function ImageErrorView({ imageURL, alt, message }) {
  return (
    <div role="alert">
      <img src={imageURL} width="600" alt={alt} />
      <p>{message}</p>
    </div>
  );
}

ImageErrorView.propTypes = {
  imageURL: PropTypes.string,
  alt: PropTypes.string,
  massage: PropTypes.string,
};

export default ImageErrorView;
