import {Container} from "@material-ui/core";
import styled from "styled-components";
import Navbar from "../NavbarComponent";
import Footer from "./FooterComponent";

const ReturnPolicyHeading = styled.div`
padding: 3.5rem 0 1.5rem;
text-align: center;
span{
font-family: Poppins,sans-serif;
font-size: 2rem;
line-height: 1.3rem;
word-spacing: 0.3rem;
}
`;

const ReturnPolicyText = styled.div`
padding: 1rem 0 0rem;
span{
font-family: Poppins,sans-serif;
font-size: 0.9rem;
line-height: 1.3rem;
word-spacing: 0.3rem;
}
li{
padding: 0.3rem 0;
font-family: Poppins,sans-serif;
font-size: 0.9rem;
word-spacing: 0.3rem;
line-height: 1.3rem;

}
`;
const ReturnPolicy = () => {
return (
    <div>
        <Navbar/>
        <ReturnPolicyHeading><span>Return Policy</span></ReturnPolicyHeading>
    <Container>
        <ReturnPolicyText><span>XOXOProtection offers a simple and easy 48 hours EXCHANGE policy to our customers. Please note that we do not take any returns, and we only exchange products in case of size, damage of product or other legitimate issues. Therefore, we do not refund any products, either damaged or otherwise. You can conveniently exchange any item within 48 hours from the time of delivery.</span></ReturnPolicyText>

            <ReturnPolicyText><span>Please do not accept any order if seal is broken/unsealed at the time of delivery.</span></ReturnPolicyText>

            <ReturnPolicyText><span>All returned items must be unused and unwashed for hygiene reasons; and returned with original packaging and tags in place. Items without tags will not be accepted.</span></ReturnPolicyText>

            <ReturnPolicyText><span>Once we receive the returned products, a quality check will be performed on the items by our quality team. This is subject to the return having met the following requirements:</span>
<ul>
    <li>The items should be unused and unwashed for hygiene reasons.</li>
    <li>The product should have the original packaging and tags in place. Items without the original tags will not be accepted.</li>
    <li>They should have been returned within 48 hours from the delivery time.</li>
    <li>They should have been returned within 48 hours from the delivery time.</li>
    <li>In case you receive a damaged/defective product, we may request you to share snapshot at contact@xoxoprotection.com.</li>
    <li>To return your product, you should mail at contact@xoxoprotection.com for the return address.</li>
</ul>
</ReturnPolicyText>
        <ReturnPolicyText><span>Any returned item received by us that does not meet the above-mentioned conditions will not be accepted, and will be returned to the customer at their expense. No amount will be reimbursed, nor will the item be exchanged in such a case.</span></ReturnPolicyText>
    </Container>
        <Footer/>
    </div>
    );
};
export default ReturnPolicy;
