import {Container} from "@material-ui/core";
import styled from "styled-components";

const Heading = styled.div`
padding-top:1rem;
padding-bottom:1rem;
font-weight:bold;
span{
font-size:1.6rem;
}`;

const QuestionBox = styled.div`
border:2px solid #dbdbdb;
border-radius:0.5rem;
padding:1.5rem 1rem;
span:first-child{
display:block;
font-size:1.2rem;
font-weight:bold;
}
span{
font-size:1.2rem;
}
span > span{
display:inline-block !important;
padding-right:0.4rem;
font-size:1.2rem;
font-weight:bold;
}
`;

const Question = () => {
    return(
        <div>
            <Container>
                <Heading><span>Customer Questions</span></Heading>
                <QuestionBox>
                <span><span>Q:</span>On the ear or over the ear?</span>
                <span><span>A:</span>Over</span>
            </QuestionBox>
            </Container>
        </div>
    );
};

export default Question;
