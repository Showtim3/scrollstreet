import * as firebase from "firebase";
import BuyButton from "../src/components/BuyButton";
import Product from "../src/components/Product/ProductComponent";
import Layout from "../src/layouts/Layout";
import firebaseConfig from "../src/services/firebase";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Index = () => {
    return (
        <Layout>
            <Product/>
            <BuyButton/>
        </Layout>
    );
};

export default Index;
