import {Box, Container, Typography} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import * as faker from "faker";
import * as React from "react";
import styled from "styled-components";
import CONSTANTS from "../../constants/constants";
import Review from "../ReviewComponent";
import Pricing from "./Pricing";
import ProductDescription from "./ProductDescriptionText";
import ProductQuestions from '../../components/ProductQuestions'
import Carousel from "../Carousel";

const product = () => {
    function generateDummyData() {
        const dataArr = [];
        for (let i = 0; i <= 10; i++) {
            dataArr.push(faker.lorem.sentence());
        }
        return dataArr;
    }


    const Announcement = styled.div`
        background-color:#08aa00;
       text-transform: uppercase;
               text-align:center;
                   margin:2rem 0;
                 padding:.5rem 0;
                     color:white;
                font-weight: 400;
           letter-spacing: .2rem;`;
    //
    const ProductName = styled.div`
        text-transform: uppercase;
                  text-align:left;
                      padding:5px ;
                      color:black;
                 font-size:1.5rem;
               letter-spacing: 1px;
    border-bottom: 3px solid #000;
    margin-bottom: .5rem;

          `;

    // @ts-ignore
    return (
        <div>
            <Announcement> GET A FLAT 15% OFF WHEN YOU PAY ONLINE</Announcement>
            <Container>
                <Carousel/>
                <ProductName>Rock L Shaped Kevlar Unbreakable Super Cable (iPhones/iPads)</ProductName>
                <Box display="flex" flexWrap="nowrap" flexDirection="row" mt={0}>
                    <Rating name="size-small" size="small" value={2}/>
                    <Typography component="legend" display="inline">10 reviews</Typography>
                </Box>
                <Box display="flex" flexWrap="nowrap" flexDirection="row">
                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize"
                         mr={2} style={{textDecoration: "line-through"}}>Rs. 1,399.00
                    </Box>
                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" color={`${CONSTANTS.primaryGreen}`}>Rs.
                        699.00
                    </Box>
                </Box>
                <Pricing/>
                <ProductDescription data={generateDummyData()}/>
                <Review/>
            </Container>
            <ProductQuestions/>
        </div>
    );
};

export default product;
