import React from 'react';
import './styles.css';
import sliderImg1 from '../common/assets/22-de-mayo.jpg';
import sliderImg2 from '../common/assets/el-cabildo-abierto-de-buenos-aires.jpg';
import sliderImg3 from '../common/assets/san_martin.jpg';
//import img4 from '../common/assets/avatarAdmin.png';
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";


class SliderHistory extends React.Component {

    handleImageLoad(event) {
        console.log('Image loaded ', event.target)
    }

    render() {

        const images = [
            {
                original: sliderImg1,
                thumbnail: sliderImg1,
                description: 'Reviví el Primer Gobierno Patrio'
            },
            {
                original: sliderImg2,
                thumbnail: sliderImg2,
                description: 'Cabildo Abierto de Buenos Aires'
            },
            {
                original: sliderImg3,
                thumbnail: sliderImg3,
                description: 'La biografía de San Martín y otros próceres'
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