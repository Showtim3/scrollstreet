import styled from "styled-components";

const ProductDescription = (props) => {
    const ProductTextWrapper = styled.div`
    text-align:center;
    div{
    display:inline-block;
    }
    li{
    font-size:1.2rem;
    text-align:left;
    padding:0.5rem 0;
    }
    `;

    console.log("props", props);
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
