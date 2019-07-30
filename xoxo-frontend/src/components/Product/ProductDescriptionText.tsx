import styled from "styled-components";
import CONSTANTS from "../../constants/constants";

const ProductDescription = (props) => {
    const ProductTextWrapper = styled.div`
    text-align:center;
    ul{
    padding-left: 1rem;
    }
    div{
    display:inline-block;
    }

    ul li:before {
    position: absolute;
    content: "\\2713\\0020";
    padding-right: 1rem;
    left: 1rem;
    color: ${CONSTANTS.primaryGreen};
}
    li{
    padding: .5rem 0 .5rem 1rem;
    font-family: Poppins,sans-serif;
    word-spacing: 0.3rem;
    line-height: 1.3rem;
    font-size:1rem;
    text-align:left;
    list-style: none;
     }
    `;

    return (
        <ProductTextWrapper>
            <div>
                <ul>
                    {props.data.map((element, i) => {
                        return <li key={i}>{element}</li>;
                    })}
                </ul>
            </div>
        </ProductTextWrapper>
    );
};
export default ProductDescription;
