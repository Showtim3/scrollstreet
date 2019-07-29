import Button from "@material-ui/core/Button";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import styled, {keyframes} from "styled-components";
import CONSTANTS from "../constants/constants";

const rotate = keyframes`
    20%, 100% {
    }
  0% {
    transform:rotate(10deg)
  }
  20% {
    transform:rotate(-10deg)
  }
  50%{
  transform: rotate(0)}
`;

const BuyButtonContainer = styled.div`
    text-align:center;
    position:fixed;
    bottom:0;
    width:100%;
    `;

const MoveAnimation = styled.div`
animation-name: ${rotate};
animation-delay:3s;
animation-duration:5s;
animation-iteration-count:infinite;
`;
const BuyButton = () => {

    return (
        <div>
            <BuyButtonContainer>
                <MoveAnimation>
                    <Button variant="contained" fullWidth={true}
                            color="primary" style={{backgroundColor: CONSTANTS.colorGreen}}>Buy Now</Button>
                </MoveAnimation>
            </BuyButtonContainer>
        </div>
    );
};
export default BuyButton;
