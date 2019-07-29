import * as firebase from "firebase";
import Head from "next/head";
import {useEffect} from "react";
import BuyButton from "../src/components/BuyButton";
import Footer from "../src/components/Footer/FooterComponent";
import Navbar from "../src/components/NavbarComponent";
import Product from "../src/components/Product/ProductComponent";
import firebaseConfig from "../src/services/firebase.tx";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Index = (props) => {
console.log(props.url.query.utm_src);
return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
                <link href="https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap" rel="stylesheet"/>

            </Head>
            <style jsx global>{`
      body {
      margin:0;
      padding:0;
      font-size:10px;
      font-family:Poppins;
      }

.carousel {
    position: relative;
    width: 100%
}

.carousel * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.carousel img {
    width: 100%;
    display: inline-block;
    pointer-events: none
}

.carousel .carousel {
    position: relative
}

.carousel.carousel-slider {
    position: relative;
    margin: 0;
    overflow: hidden
}

.carousel .slider-wrapper {
    overflow: hidden;
}

.carousel .slider-wrapper {
    overflow: hidden;
    margin: auto;
    width: 100%;
    -webkit-transition: height .15s ease-in;
    -moz-transition: height .15s ease-in;
    -ms-transition: height .15s ease-in;
    -o-transition: height .15s ease-in;
    transition: height .15s ease-in
}

.carousel .slider-wrapper.axis-horizontal .slider {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex
}

.carousel .slider-wrapper.axis-horizontal .slider .slide {
    flex-direction: column;
    flex-flow: column
}

.carousel .slider-wrapper.axis-vertical {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex
}

.carousel .slider-wrapper.axis-vertical .slider {
    -webkit-flex-direction: column;
    flex-direction: column
}

.carousel .slider {
    -webkit-transition: height 0.15s ease-in;
    -moz-transition: height 0.15s ease-in;
    -ms-transition: height 0.15s ease-in;
    -o-transition: height 0.15s ease-in;
    transition: height 0.15s ease-in;
}

.carousel .slider-wrapper.axis-horizontal .slider {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
}

.carousel .slider-wrapper.axis-horizontal .slider .slide {
    flex-direction: column;
    flex-flow: column;
}

.carousel .slider-wrapper.axis-vertical {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
}

.carousel .slider-wrapper.axis-vertical .slider {
    -webkit-flex-direction: column;
    flex-direction: column;
}

.carousel .slider {
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
    width: 100%
}

.carousel .slider.animated {
    -webkit-transition: all .35s ease-in-out;
    -moz-transition: all .35s ease-in-out;
    -ms-transition: all .35s ease-in-out;
    -o-transition: all .35s ease-in-out;
    transition: all .35s ease-in-out
}

.carousel .slide {
    width: 100%;
}

.carousel .slider.animated {
    -webkit-transition: all 0.35s ease-in-out;
    -moz-transition: all 0.35s ease-in-out;
    -ms-transition: all 0.35s ease-in-out;
    -o-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
}

.carousel .slide {
    min-width: 100%;
    margin: 0;
    position: relative;
    text-align: center;
    background: #000
}

.carousel .slide img {
    width: 100%;
    vertical-align: top;
    border: 0
}

.carousel .slide iframe {
    display: inline-block;
    width: calc(100% - 80px);
    margin: 0 40px 40px;
    border: 0
}

.carousel .control-dots {
    text-align:center;
    margin: 20px auto;
    width: 100%
 }

.carousel ul{
padding:0;
}

.carousel .control-dots .dot {
    -webkit-transition: opacity .25s ease-in;
    -moz-transition: opacity .25s ease-in;
    -ms-transition: opacity .25s ease-in;
    -o-transition: opacity .25s ease-in;
    transition: opacity .25s ease-in;
    opacity: .3;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .9);
    background: black;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    cursor: pointer;
    display: inline-block;
    margin: 0 8px
}

.carousel .control-dots .dot.selected, .carousel .control-dots .dot:hover {
    opacity: 1
}
    `}</style>
            <Navbar/>
            <Product/>
            <Footer/>
            <BuyButton/>
        </div>
    );
};


export default Index;
