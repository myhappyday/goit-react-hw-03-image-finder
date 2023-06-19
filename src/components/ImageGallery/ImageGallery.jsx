import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import galleryAPI from '../../services/galleryAPI';
import ImageErrorView from '../ImageErrorView';
import imageError from '../../images/error-oops.jpg';
import imageErrorView from '../../images/error.jpg';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import Loader from '../Loader';

class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
    page: 1,
    totalPage: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { images, page } = this.state;
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    // console.log('prevName:', prevName)
    // console.log('nextName:', nextName)

    if (prevName !== nextName) {
      this.setState({
        images: [],
        page: 1,
        totalPage: 0,
        status: 'pending',
      });
    }
    if (prevName !== nextName || prevState.page !== page) {
      try {
        const response = await galleryAPI.fetchImages(nextName, page);
        const { total, hits, totalHits } = response;
        if (total === 0) {
          this.setState({ images: [], status: 'resolved' });
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        }
        this.setState({
          images: page === 1 ? [...hits] : [...images, ...hits],
          totalPage: Math.ceil(totalHits / 12),
          status: 'resolved',
        });
      } catch (error) {
        this.setState({ error, status: 'rejected' });
        toast.error(
          'Oops! Something went wrong. Please, reload the page and try again.'
        );
        // console.log(error.message);
      }
    }
  }

  handleLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, status, page, totalPage } = this.state;

    if (status === 'idle') {
      return <p>Let's try to find something!</p>;
    }
    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return (
        <ImageErrorView
          imageURL={imageError}
          alt={'Something went wrong'}
          width="600"
          message={
            'Oops! Something went wrong. Please, reload the page and try again.'
          }
        />
      );
    }

    if (status === 'resolved') {
      if (images.length === 0) {
        return (
          <ImageErrorView
            imageURL={imageErrorView}
            alt={'Crying meme'}
            width="340"
            message={`Sorry, we can't find images of ${this.props.imageName}.`}
          />
        );
      }
      return (
        <>
          <ul>
            {images.map(({ id, webformatURL, tags }) => {
              return (
                <ImageGalleryItem key={id} imageURL={webformatURL} alt={tags} />
              );
            })}
          </ul>
          {page < totalPage && <Button onClick={this.handleLoadMoreClick} />}
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  imageName: PropTypes.string.isRequired,
};

export default ImageGallery;
