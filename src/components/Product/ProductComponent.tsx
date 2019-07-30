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
import * as firebase from "firebase";


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

const randomData = CONSTANTS.randomData;

const generateDummyData = () => {
    const dataArr = [];
    for (let i = 0; i <= 10; i++) {
        dataArr.push(faker.lorem.sentence());
    }
    return dataArr;
};


const options = {
    key: "rzp_test_dD7ZhZ5gTPeleN",
    amount: "29935",
    currency: "INR",
    name: "Acme Corp",
    description: "A Wild Sheep Chase is the third novel by Japanese author  Haruki Murakami",
    image: "",
    // "order_id": "order_9A33XWu170gUtm",
    handler: (response) => {
        alert(response.razorpay_payment_id);
    },
    prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com"
    },
    notes: {
        address: "note value"
    },
    theme: {
        "color": "#F37244"
    }
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
        console.log(age, priceRange);

        let data = {};
        const database = firebase.database();
        const dataBaseRef = database.ref('/1234');

        dataBaseRef.on('value', async (snap: firebase.database.DataSnapshot) => {
            data = await snap.val();
            console.log(data);
            console.log(randomData)
            const product = {age, cost: data[age][priceRange]};
            console.log(age, data[age][priceRange]);

            this.setState({
                product: product
            })
        });
    };


    RazorPayButton = () => {

        if (!process.browser) {
            return null;
        }

        const options = {
            "key": "rzp_test_dD7ZhZ5gTPeleN",
            "amount": "29935",
            "currency": "INR",
            "name": "Acme Corp",
            "description": "A Wild Sheep Chase is the third novel by Japanese author  Haruki Murakami",
            "image": "https://example.com/your_logo",
            // "order_id": "order_9A33XWu170gUtm",
            "handler": function (response) {
                alert(response.razorpay_payment_id);
            },
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com"
            },
            "notes": {
                "address": "note value"
            },
            "theme": {
                "color": "#F37254"
            }
        };

        // @ts-ignore
        const rzp1 = new Razorpay(options);
        return (<button id="rzp-button1" onClick={e => {
            rzp1.open();
            e.preventDefault();
        }}>Pay</button>)
    };


    render() {

        const {product} = this.state;

        return (
            <div>
                <this.RazorPayButton/>
                <Announcement> GET A FLAT 1% OFF WHEN YOU PAY ONLINE</Announcement>
                <Container>
                    <Carousel/>
                    <ProductName>Rock L Shaped kevlar Unbreakable Super Cable (iPhones/iPads)</ProductName>
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
