import React, { Component } from 'react';
import galleryAPI from '../../services/galleryAPI';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    // value: null,
    images: [],
    error: null,
    status: 'idle',
    page: 1,
    totalPages: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    // console.log('prevName:', prevName)
    // console.log('nextName:', nextName)
    if (prevName !== nextName || prevState.page !== page) {
      this.setState({
        images: [],
        page: 1,
        status: 'pending',
      });
      // const {total, totalHits, hits} = response.data
      galleryAPI
        .fetchImages(nextName)
        .then(images => this.setState({
          images:
          page === 1 ? images.data.hits : [...prevState.images, ...images.data.hits], status: 'resolved'
        }))
        .catch(error => this.setState({ error, status: 'rejected' }));
      

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
    const { status } = this.state;
    //{ value, error, status }
    // const { imageName } = this.props;
    if (status === 'idle') {
      return <div>Let's try find something!</div>;
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
  imageName: PropTypes.string.isRequired,
};

export default ImageGallery;
