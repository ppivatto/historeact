import React, { Component } from 'react';

import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

class Gallery extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showIndex: true,
      slideOnThumbnailHover: true,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      slideInterval: 2000,
      showVideo: {},
      openComment: false,
      pictureSelected: null,
      commentToPush: ''
    };

  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  render() {
      return (
        <div>
            Gallery
        </div>
      );
  }
}

export default Gallery;