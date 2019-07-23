import Navbar from "../src/components/NavbarComponent";
import Product from "../src/components/Product/ProductComponent"
import BuyButton from "../src/components/BuyButton";
import styled from 'styled-components';
import Head from 'next/head'

const Parent = styled.div`
margin:0;
padding:0;
font-size:10px;
`
const Index = (props) => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
            </Head>
            <style jsx global>{`
      body { 
      margin:0;
      padding:0;
      font-size:10px;
      }
    `}</style>
            <Navbar/>
            <Product/>
            <div style={{backgroundColor: "red", height: "1400px"}}>Hey</div>

            <BuyButton/>

        </div>
    )
};

export default Index;
