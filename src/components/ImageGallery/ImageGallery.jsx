import React, { Component } from 'react';
import galleryAPI from '../../services/galleryAPI';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    value: null,
    images: [],
    error: null,
    status: 'idle',
    page: 1,
    totalPages: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevValue = prevProps.searchValue;
    const nextValue = this.props.searchValue;
    if (prevValue !== nextValue) {
      this.setState({
        images: [],
        page: 1,
        status: 'pending',
      });
      // galleryAPI
      //   .fetchImages(nextValue)
      //   .then(value => this.setState({ value, status: 'resolved' }))
      //   .catch(error => this.setState({ error, status: 'rejected' }));

      if (prevValue !== nextValue || prevState.page !== page) {
        galleryAPI
          .fetchImages(nextValue, page)
          .then(images => {
            this.setState({
              images:
                page === 1
                  ? images.hits
                  : [...prevState.images, ...images.hits],
              totalPages: Math.floor(images.totalHits / 12),
              status: 'resolved',
            });
          })
          .catch(error => {
            this.setState({ error, status: 'rejected' });
          });
      }
    }
  }
  render() {
    const { status } = this.state;
    //{ value, error, status }
    // const { searchValue } = this.props;
    if (status === 'idle') {
      return <div>Try to find something!</div>;
    }
    // if (status === 'pending') {
    //   return <PokemonPendingView searchValue={searchValue} />;
    // }
    // if (status === 'rejected') {
    //   return <PokemonErrorView message={error.message} />;
    // }
    // if (status === 'resolved') {
    //   return <PokemonDataView pokemon={value} />;
    // }
  }
}

ImageGallery.propTypes = {
  searchValue: PropTypes.string.isRequired,
};

export default ImageGallery;
