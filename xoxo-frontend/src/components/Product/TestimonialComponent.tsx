import {Container} from "@material-ui/core";
import styled from "styled-components";

const TestimonialBox = styled.div`
  text-align: center;
  h3 {
  font-size: 2rem;
  margin: 0;
  padding: 2rem 0;
  }
  img{
  min-width: 5rem;
  min-height: 5rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  }
`;

const Name = styled.span`
font-size:1.2rem;
padding: 0.5rem 0 3rem;
display: block;
`;
const Description = styled.span`
display: block;
padding: 1rem 0;
font-size:1.2rem;
`;
const Testimonial = () => {
return(
    <Container>
        <TestimonialBox>
        <h3>Testimonials</h3>
        <img src="/xoxo-frontend/staticrontend/static/images/girl.jpg" alt=""/>
            <Description>Shipping on time. Quick response and excellent service. Gift was perfect!</Description>
            <Name>-Jessica Smith</Name>
        </TestimonialBox>
    </Container>

);
};

export default Testimonial;
