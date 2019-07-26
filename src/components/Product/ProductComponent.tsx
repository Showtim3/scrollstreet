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


const Announcement = styled.div`
        background-color:#08aa00;
       text-transform: uppercase;
               text-align:center;
                   margin:2rem 0;
                 padding:.5rem 0;
                     color:white;
                font-weight: 400;
           letter-spacing: .2rem;`;

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

const randomData = {
    "< 1 months": {
        "5 - 10k": {
            original: 4999,
            actual: 9999
        },
        "10 - 15k": {
            original: 10999,
            actual: 14599
        },
        "15 - 20k": {
            original: 15999,
            actual: 19999
        },
        "20 - 25k": {
            original: 201999,
            actual: 24999
        },
        "25 - 35k": {
            original: 251999,
            actual: 33999
        },
        "35 - 50k": {
            original: 41999,
            actual: 44999
        },
        "50k+": {
            original: 51999,
            actual: 55999
        }
    },
    "< 3 months": {
        "5 - 10k": {
            original: 41999,
            actual: 9999
        },
        "10 - 15k": {
            original: 10999,
            actual: 14599
        },
        "15 - 20k": {
            original: 15999,
            actual: 19999
        },
        "20 - 25k": {
            original: 201999,
            actual: 24999
        },
        "25 - 35k": {
            original: 251999,
            actual: 33999
        },
        "35 - 50k": {
            original: 41999,
            actual: 44999
        },
        "50k+": {
            original: 51999,
            actual: 55999
        }
    },
    "< 6 months": {
        "5 - 10k": {
            original: 4999,
            actual: 9999
        },
        "10 - 15k": {
            original: 10999,
            actual: 14599
        },
        "15 - 20k": {
            original: 15999,
            actual: 19999
        },
        "20 - 25k": {
            original: 201999,
            actual: 24999
        },
        "25 - 35k": {
            original: 251999,
            actual: 33999
        },
        "35 - 50k": {
            original: 41999,
            actual: 44999
        },
        "50k+": {
            original: 51999,
            actual: 55999
        }
    },
    "< 1 year": {
        "5 - 10k": {
            original: 41999,
            actual: 9999
        },
        "10 - 15k": {
            original: 10999,
            actual: 14599
        },
        "15 - 20k": {
            original: 15999,
            actual: 19999
        },
        "20 - 25k": {
            original: 201999,
            actual: 24999
        },
        "25 - 35k": {
            original: 251999,
            actual: 33999
        },
        "35 - 50k": {
            original: 39999,
            actual: 44999
        },
        "50k+": {
            original: 53399,
            actual: 54999
        }
    }
};

const generateDummyData = () => {
    const dataArr = [];
    for (let i = 0; i <= 10; i++) {
        dataArr.push(faker.lorem.sentence());
    }
    return dataArr;
};

class IProductState {
    product: {
        age: string
        cost: {
            original: number,
            actual: number
        }
    }
}

class Product extends React.Component<any, IProductState> {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                age: "< 6 months",
                cost: {
                    original: 51999,
                    actual: 55999
                }
            }
        }
    }


    range = (age: string, priceRange: string) => {
        console.log(age, priceRange)
        const product = {age, cost: randomData[age][priceRange]};
        console.log(age, randomData[age][priceRange]);
        this.setState({
            product: product
        })


    };

    render() {

        const {product} = this.state;

        return (
            <div>
                <Announcement> GET A FLAT 15% OFF WHEN YOU PAY ONLINE</Announcement>
                <Container>
                    <Carousel/>
                    <ProductName>Rock L Shaped kevlar Unbreaable Super Cable (iPhones/iPads)</ProductName>
                    <Box display="flex" flexWrap="nowrap" flexDirection="row" mt={0}>
                        <Rating name="size-small" size="small" value={2}/>
                        <Typography component="legend" display="inline">10 reviews</Typography>
                    </Box>
                    <Box display="flex" flexWrap="nowrap" flexDirection="row">
                        <Box fontWeight="fontWeightBold" fontSize="h6.fontSize"
                             mr={2} style={{textDecoration: "line-through"}}>Rs. {product.cost.actual}
                        </Box>
                        <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" color={CONSTANTS.primaryGreen}>Rs.
                            {product.cost.original}
                        </Box>
                    </Box>
                    <ProductQuestions range={this.range}/>
                    <Pricing/>
                    <ProductDescription data={generateDummyData()}/>
                    <Review/>
                </Container>
            </div>
        );
    }
}

export default Product;
