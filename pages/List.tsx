import styled from "styled-components";
import BuyButton from "../src/components/BuyButton";
import Footer from "../src/components/FooterComponent";
import Navbar from "../src/components/NavbarComponent";
import ProductCard from "../src/components/Product/ProductCard";
import Testimonial from "../src/components/Product/TestimonialComponent";

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
        <div>
            <style jsx global>{`
      body {
      margin:0;
      padding:0;
      font-size:10px;
      font-family:Poppins,sans-serif;
      }p
    `}</style>
            <Wrapper>
            <Navbar/>
            <Products>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Products>
            <Testimonial/>
            <Footer/>
            <BuyButton/>
            </Wrapper>
        </div>
    );
};

export default ListPage;
