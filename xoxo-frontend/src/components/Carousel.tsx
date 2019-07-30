import React, {Component} from 'react';
import {Carousel as ReactCarousel} from 'react-responsive-carousel';


class Carousel extends Component {

    render() {
        return (

            <ReactCarousel showArrows={false}
                           showThumbs={false}
                           showStatus={false}>
                <div>
                    <img width="100%" src="/xoxo-frontend/staticrontend/static/images/product.webp" alt=""/>
                </div>
                <div>
                    <img width="100%" src="/xoxo-frontend/staticrontend/static/images/product.webp" alt=""/>
                </div>
                <div>
                    <img width="100%" src="/xoxo-frontend/staticrontend/static/images/product.webp" alt=""/>
                </div>
                <div>
                    <img width="100%" src="/xoxo-frontend/staticrontend/static/images/product.webp" alt=""/>
                </div>
                <div>
                    <img width="100%" src="/xoxo-frontend/staticrontend/static/images/product.webp" alt=""/>
                </div>
                <div>
                    <img width="100%" src="/xoxo-frontend/staticrontend/static/images/product.webp" alt=""/>
                </div>

            </ReactCarousel>
        );
    }
}

export default Carousel;
