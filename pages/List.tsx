import styled from "styled-components";
import BuyButton from "../src/components/BuyButton";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/NavbarComponent";
import ProductCard from "../src/components/Product/ProductCard";
import Testimonial from "../src/components/Product/TestimonialComponent";
import Layout from "../src/layouts/Layout";

const Products = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: center;
`;

const Wrapper = styled.div`
max-width: 600px;
margin: 1px auto;
`;

const ListPage = () => {
    return (
        <Layout>
            <Wrapper>
                <Products>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </Products>
                <Testimonial/>
                <BuyButton/>
            </Wrapper>
        </Layout>
    );
};

export default ListPage;
