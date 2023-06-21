import PropTypes from 'prop-types';
import { ErrorWrapper, Image, Message } from './ImageErrorView.styled';

const ImageErrorView = ({ imageURL, alt, width, message }) => {
  return (
    <ErrorWrapper role="alert">
      <Image src={imageURL} width={width} alt={alt} />
      <Message>{message}</Message>
    </ErrorWrapper>
  );
};

ImageErrorView.propTypes = {
  imageURL: PropTypes.string,
  alt: PropTypes.string,
  massage: PropTypes.string,
};

export default ImageErrorView;
