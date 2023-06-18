import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import galleryAPI from '../../services/galleryAPI';
import ImageErrorView from '../ImageErrorView';
import imageError from '../../images/error-oops.jpg';
import imageErrorView from '../../images/error.png';

class ImageGallery extends Component {
  state = {
    images: [],
    error: false,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    // const { page } = this.state;
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    // console.log('prevName:', prevName)
    // console.log('nextName:', nextName)
    if (prevName !== nextName) {
      try {
        this.setState({
          images: [],
          // page: 1,
          status: 'pending',
        });

        const response = await galleryAPI.fetchImages(nextName);
        const { total, hits } = response;
        if (total === 0) {
          this.setState({ error: true, images: null, status: 'rejected' });
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        }
        this.setState({
          images: [...hits],
          status: 'resolved',
        });
      } catch (error) {
        this.setState({ error: true, status: 'rejected' });
        toast.error(
          'Oops! Something went wrong. Please, reload the page and try again.'
        );
        // console.log(error.message);
      }

      // .catch(error => this.setState({ error, status: 'rejected' }));

      //     if (prevName !== nextName || prevState.page !== page) {
      //       galleryAPI
      //         .fetchImages(nextName, page)
      //         .then(images => {
      //           this.setState({
      //             images:
      //               page === 1
      //                 ? images.hits
      //                 : [...prevState.images, ...images.hits],
      //             totalPages: Math.floor(images.totalHits / 12),
      //             status: 'resolved',
      //           });
      //         })
      //         .catch(error => {
      //           this.setState({ error, status: 'rejected' });
      //         });
      //     }
    }
  }
  render() {
    const { images, status } = this.state;

    if (status === 'idle') {
      return <p>Let's try to find something!</p>;
    }
    if (status === 'pending') {
      return <p>Loading...</p>;
      // return <ImagePendingView/>;
    }

    if (status === 'rejected') {
      if (!images) {
        return (
          <ImageErrorView
            imageURL={imageErrorView}
            alt={'Crying meme'}
            message={`Sorry, we can't find images of ${this.props.imageName}.`}
          />
        );
      }
      return (
        <ImageErrorView
          imageURL={imageError}
          alt={'Something went wrong'}
          message={
            'Oops! Something went wrong. Please, reload the page and try again.'
          }
        />
      );
    }

    if (status === 'resolved') {
      return (
        <div>
          <ul>
            {images.map(image => {
              return (
                <li key={image.id}>
                  <img src={image.webformatURL} alt={image.tags} />
                </li>
              );
            })}
          </ul>
        </div>
      );
      // return <ImageDataView/>;
    }
  }
}

ImageGallery.propTypes = {
  imageName: PropTypes.string.isRequired,
};

export default ImageGallery;
