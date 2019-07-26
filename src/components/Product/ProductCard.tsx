import {Box, Typography} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import CONSTANTS from "../../constants/constants";
import {Star} from "@material-ui/icons";

const ProductCard = () => {
    const ProductWrapper = styled.div`
    width: 40%;
    display: inline-block;
    padding: 2rem 4%;
`;
    const ProductCarousel = styled.div`
                 text-align:center;
            background-color:white;
                        width:100%;
     `;

    const ProductName = styled.div`
       text-transform: uppercase;
                 text-align:left;
                   margin:0 0 1rem;
          box-sizing:content-box;
                    padding:5px ;
                     color:black;
                font-size:1rem;
            font-family: Poppins,sans-serif;
             letter-spacing: 1px;
   border-bottom: 3px solid #000;

                h2{
                font-size: 0.8rem;
                margin-bottom:0;
                font-weight: normal;
                }
         `;

    const Rating = styled.div`
            display:flex ;
            flex-wrap:nowrap;                  
            flex-direction:row;
            justify-content: center;
            align-items: center;
            
`;

    return (
        <ProductWrapper>
            <ProductCarousel>
                <img width="100%" src="/static/images/product.webp" alt=""/>
            </ProductCarousel>
            <ProductName><h2>Rock D Shaped Kevlar Unbreakable Supe Cable (iPhones/iPads)</h2>
            </ProductName>
            <Box display="flex" flexWrap="nowrap" flexDirection="row" mt={0}>
                <Rating><Star style={{height: '12px', width: '12px', color: "#ffb303"}}/><Star
                    style={{height: '12px', width: '12px', color: "#ffb303"}}/><Star
                    style={{height: '12px', width: '12px', color: "#ffb303"}}/><Star
                    style={{height: '12px', width: '12px', color: "#ffb303"}}/><Star
                    style={{height: '12px', width: '12px', color: "#ffb303"}}/>
                </Rating>
                <Typography component="legend" display="inline" variant="caption">10 reviews</Typography>
            </Box>

            <Box display="flex" flexWrap="nowrap" mt={1} flexDirection="column">
                <Box fontWeight="fontWeightBold" fontSize="1rem"
                     mr={2} style={{textDecoration: "line-through"}}>Rs. 1,399.00
                </Box>
                <Box fontWeight="fontWeightBold" fontSize="1rem" color={CONSTANTS.primaryGreen}>Rs.
                    699.00
                </Box>
            </Box>
        </ProductWrapper>
    );
};

export default ProductCard;
