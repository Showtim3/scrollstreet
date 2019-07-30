import * as firebase from "firebase";
import BuyButton from "../src/components/BuyButton";
import Product from "../src/components/Product/ProductComponent";
import firebaseConfig from "../src/services/firebase.tx";
import Layout from "../src/layouts/Layout";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Index = (props) => {
    // console.log(props.url.query.utm_src);
    return (
        <Layout style={{maxWidth: "600px", margin: "0 auto"}}>
            <Product/>
            <BuyButton/>
        </Layout>
    );
};

export default Index;
