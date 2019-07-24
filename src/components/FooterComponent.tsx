import styled from 'styled-components';
import {Container} from "@material-ui/core";

const FooterContainer = styled.div`
background-color:#e6e6e6;
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
`;
const FooterList = styled.div`
width:42%;
span{
font-size:1.4rem
}
ul{
padding:0;
list-style:none;}
li{
font-size:1rem;
}`;
const CopyrightContainer = styled.div`
width:100%;
padding:1.5rem 0;
text-align:center;
span{
font-size:0.8rem;
}
img{
padding:0.6rem 0 1rem;}
`;

const Footer = () => {
    return (
        <div>
            <Container>
                <FooterContainer>
                    <FooterList><span>Main Menu</span>
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>Contact Us</li>
                        </ul>
                    </FooterList>
                    <FooterList><span>Footer Menu</span>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </FooterList>

                    <CopyrightContainer>
                        <span>&copy;2019 Copyright XoXo Protection </span>
                        <img src="/static/images/payment.png" alt=""/>
                    </CopyrightContainer>
                </FooterContainer>
            </Container>
        </div>
    )
};
export default Footer;