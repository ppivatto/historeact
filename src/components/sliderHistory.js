import React from 'react';
import styles from './styles.css';
import img1 from '../common/assets/avatarAdmin.png';
import img2 from '../common/assets/avatarAdmin.png';
import img3 from '../common/assets/avatarAdmin.png';
import img4 from '../common/assets/avatarAdmin.png';
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";


class SliderHistory extends React.Component {

    handleImageLoad(event) {
        console.log('Image loaded ', event.target)
    }

    render() {

        const images = [
            {
                original: 'http://historiarg.com.ar/img/25-de-mayo.jpg',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
            },
            {
                original: 'http://lorempixel.com/500/300/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
                original: 'http://lorempixel.com/500/300/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            }
        ];

        return (
            <div className="galeria-section-div">
                <ImageGallery
                    className="image-gallery"
                    autoPlay={true}
                    lazyLoad={true}
                    showBullets={true}
                    items={images}
                    slideInterval={5000}
                    onImageLoad={this.handleImageLoad}/>
            </div>
        );
    }

}

export default SliderHistory;