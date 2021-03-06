import Button from "@material-ui/core/Button";
import styled, {keyframes} from "styled-components";
import CONSTANTS from "../constants/constants";
import * as React from "react";

const rotate = keyframes`
    16.65% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
}
    33.3% {
    -webkit-transform: translateX(-6px);
    transform: translateX(-6px);
}
    49.95% {
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
}
    66.6% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px);
}
    83.25% {
    -webkit-transform: translateX(1px);
    transform: translateX(1px);
}
    100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
}
`;

const BuyButtonContainer = styled.div`
   max-width: 500px;
   position: fixed;
   width: 500px;
   bottom: 0.8rem;
   left: 50%;
   transform: translateX(-50%);
   text-align: center;
    `;

const MoveAnimation = styled.div`
animation-name: ${rotate};
vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-animation-duration: 1s;
  animation-duration: 5s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: infinite;
`;


const options = {
    key: "rzp_test_dD7ZhZ5gTPeleN",
    amount: "29935",
    currency: "INR",
    name: "Xoxo protection",
    description: "Xoxo protecion",
    image: "../../static/images/xoxopro.png",
    // "order_id": "order_9A33XWu170gUtm",
    handler: (response) => {
        console.log(response);
    },
    prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com"
    },
    theme: {
        color: `${CONSTANTS.primaryGreen}`,
    }
};

const RazorPay = () => {
    if (!process.browser) {
        return null;
    }
    // @ts-ignore
    const rzp1 = new Razorpay(options);
    return <Button variant="contained" fullWidth={true} color="primary"
                   style={{backgroundColor: CONSTANTS.colorGreen}}
                   onClick={() => rzp1.open()}>Buy Now</Button>;
};


const BuyButton = () => {

    return (
        <div>
            <BuyButtonContainer>
                <MoveAnimation>
                    <RazorPay/>
                </MoveAnimation>
            </BuyButtonContainer>
        </div>
    );
};
export default BuyButton;
