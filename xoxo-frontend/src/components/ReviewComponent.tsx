import styled from 'styled-components';
import {Rating} from "@material-ui/lab";
import {Container} from "@material-ui/core";



const Heading = styled.div`
padding-top:1rem;
padding-bottom:1rem;
span{
font-size:1.6rem;
font-weight:bold;
}`;

const Person = styled.div`
    display:flex;
    flex-wrap:wrap;
    div{
    padding-top:1rem
    }
     img{
        max-width:2.5rem;
        height:2.5rem;
        border-radius:50%;
     }
    span{
    padding-left:1rem;
    font-size:1.3rem
    position:relative;
    bottom:1rem;
    }
`;
const ReviewText = styled.div`
h2{
    font-size:1.2rem;
    font-weight:bold;
}
span{
word-spacing:0.3rem;
font-size:1rem;
line-height:1.4rem;
}
`;
const Review = () => {
    return (
        <div>
            <Container>
                <Heading><span>Top Reviews</span></Heading>
                <Person>
                    <div><img src="/xoxo-frontend/staticrontend/static/images/girl.jpg" alt=""/>
                        <span>Jessica Martin</span>
                    </div>
                </Person>
                <Rating readOnly value={4} />
                <ReviewText>
                    <h2>Good Product</h2>
                    <span>Lorem Ipsum iss simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </span>
                </ReviewText>
            </Container>
        </div>
    )
}

export default Review;
