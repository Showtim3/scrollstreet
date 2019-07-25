import {Box, Container, Typography} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import CONSTANTS from "../../constants/constants";

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

    return (
        <ProductWrapper>
            <ProductCarousel>
                <img width="100%" src="/static/images/product.webp" alt=""/>
            </ProductCarousel>
            <ProductName><h2>Rock D Shaped Kevlar Unbreakable Super Cable (iPhones/iPads)</h2>
            </ProductName>
            <Box display="flex" flexWrap="nowrap" flexDirection="row" mt={0}>
                <Rating name="size-small" size="small"  value={2}/>
                <Typography component="legend" display="inline">10 reviews</Typography>
            </Box>
            <Box display="flex" flexWrap="nowrap" mt={1} flexDirection="row">
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
