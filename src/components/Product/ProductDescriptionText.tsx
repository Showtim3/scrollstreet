import styled from "styled-components";

const ProductDescription = (props) => {
    const ProductTextWrapper = styled.div`
    text-align:center;
    ul{
    padding-left: 1rem;
    }
    div{
    display:inline-block;
    }
    li{
    font-family: Poppins,sans-serif;
    word-spacing: 0.3rem;
    line-height: 1.3rem;
    font-size:1rem;
    text-align:left;
    padding:0.5rem 0;
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
