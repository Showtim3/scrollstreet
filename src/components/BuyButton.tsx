import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled, {keyframes} from 'styled-components';

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
                    <Button variant="contained" color="primary">Buy Now</Button>
                </MoveAnimation>
            </BuyButtonContainer>
        </div>
    )
}
export default BuyButton;
