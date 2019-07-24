import Navbar from "../src/components/NavbarComponent";
import Product from "../src/components/Product/ProductComponent"
import BuyButton from "../src/components/BuyButton";
import Head from 'next/head'
import Footer from "../src/components/FooterComponent";

const Index = () => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
                <link href="https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap" rel="stylesheet"/>
            </Head>
            <style jsx global>{`
      body { 
      margin:0;
      padding:0;
      font-size:10px;
      font-family:Poppins;
      }
    `}</style>
            <Navbar/>
            <Product/>
            <Footer/>
            <BuyButton/>
        </div>
    )
};

export default Index;
