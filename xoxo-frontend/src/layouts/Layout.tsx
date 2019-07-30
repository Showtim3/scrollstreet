import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/NavbarComponent";
import "../scss/main.scss";

const layoutStyle = {
    margin: "0 auto",
    maxWidth: "600px",
    padding: 0,
};

const Layout = (props) => {
    return (
        <div style={layoutStyle}>
            <Head>
                <title>Xoxo-Protection</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
                <link href="https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap" rel="stylesheet"/>
                <script src="https://checkout.razorpay.com/v1/checkout.js"> </script>
            </Head>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default Layout;
