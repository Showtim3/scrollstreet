import React, {Component} from 'react';
import styled from "styled-components";
import {Carousel as ReactCarousel} from 'react-responsive-carousel';


class Carousel extends Component {
    render() {
        return (
            <ReactCarousel showArrows={false}
                           showThumbs={false}
            >
                <div>
                    <img width="100%" src="/static/images/product.webp" alt=""/>
                </div>
                <div>
                    <img width="100%" src="/static/images/product.webp" alt=""/>
                </div>
                <div>
                    <img width="100%" src="/static/images/product.webp" alt=""/>
                </div>
            </ReactCarousel>
        );
    }
}

export default Carousel;
