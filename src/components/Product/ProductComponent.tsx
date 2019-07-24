import ProductDescription from "./ProductDescriptionText";
import styled from 'styled-components';
import CONSTANTS from '../../constants/constants';
import * as faker from 'faker'
import {Rating} from "@material-ui/lab";
import Review from "../ReviewComponent";
import Question from "../QuestionsComponent";
import {Box, Container, Typography, Grid, Paper} from "@material-ui/core";
import * as React from "react";

const product = () => {
    function generateDummyData() {
        let dataArr = [];
        for (let i = 0; i <= 10; i++) {
            dataArr.push(faker.lorem.sentence());
        }
        console.log(dataArr);
        return dataArr;
    }

    const ProductCarousel = styled.div`
                 text-align:center;
            background-color:white;
                        width:100%;
     `;

    const Announcement = styled.div`
        background-color:#08aa00;
       text-transform: uppercase;
               text-align:center;
                   margin:2rem 0;
                 padding:.5rem 0;
                     color:white;
                font-weight: 400;
           letter-spacing: .2rem; 
    `;

    const ProductName = styled.div`
       text-transform: uppercase;
                 text-align:left;
                   margin:2rem 0 1rem;
          box-sizing:content-box;
                    padding:5px ;
                     color:black;
                font-size:1.2rem;
            font-family: Poppins;
             letter-spacing: 1px; 
   border-bottom: 3px solid #000;
   
                h2{
                margin-bottom:0;
                }  
         `;


    const QuantitySelector = styled.div`
    `;

    return (
        <div>
            <Announcement> GET A FLAT 15% OFF WHEN YOU PAY ONLINE</Announcement>
            <ProductCarousel>
                <img width="90%" src="/static/images/product.webp" alt=""/>
            </ProductCarousel>
            <ProductName><h2 >Rock L Shaped Kevlar Unbreakable Super Cable (iPhones/iPads)</h2>
            </ProductName>
            <Rating name="hover-tooltip" value={2} />
            <ProductDescription data={generateDummyData()}/>
            <Review/>
            <Question/>
            <Container>
                <ProductCarousel>
                    <img width="100%" src="/static/images/product.webp" alt=""/>
                </ProductCarousel>
                <ProductName><h2>Rock L Shaped Kevlar Unbreakable Super Cable (iPhones/iPads)</h2>
                </ProductName>
                <Box display="flex" flexWrap="nowrap" flexDirection="row" mt={0}>
                    <Rating name="size-small" size="small" value={2}/>
                    <Typography component="legend" display="inline">10 reviews</Typography>
                </Box>
                <Box display="flex" flexWrap="nowrap" mt={1} flexDirection="row">
                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize"
                         mr={2} style={{textDecoration: "line-through"}}>Rs. 1,399.00</Box>
                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" color={`${CONSTANTS.primaryGreen}`}>Rs.
                        699.00</Box>
                </Box>

                <QuantitySelector>
                </QuantitySelector>
                <ProductDescription data={generateDummyData()}/>
            </Container>
        </div>
    )
};

export default product;
