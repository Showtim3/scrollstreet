import {Container} from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import Navbar from "../NavbarComponent";
import Footer from "./FooterComponent";


const PrivacyPolicyHeading = styled.div`
padding: 3.5rem 0 1.5rem;
text-align: center;
span{
font-family: Poppins,sans-serif;
font-size: 2rem;
line-height: 1.3rem;
word-spacing: 0.3rem;
}
`;

const PolicyHeading = styled.div`
padding: 2rem 0 0rem;
span{
font-family: Poppins,sans-serif;
font-size: 0.9rem;
word-spacing: 0.3rem;
line-height: 1.3rem;
}
`;

const PolicyText = styled.div`
padding: 1rem 0 0rem;
span{
font-family: Poppins,sans-serif;
font-size: 0.9rem;
word-spacing: 0.3rem;
line-height: 1.3rem;
}
`;

const Privacy = () => {
    return (
        <div>
        <div> <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta charSet="utf-8"/>
            <link href="https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap" rel="stylesheet"/>
        </Head>
        </div>
            <Navbar/>
            <PrivacyPolicyHeading><span>Privacy Policy</span></PrivacyPolicyHeading>
            <Container>
            <PolicyHeading>
                <span>
                    SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?
                </span>
            </PolicyHeading>
            <PolicyText>
                <span>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system. Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.
                </span>
            </PolicyText>

            <PolicyHeading><span>SECTION 2 - CONSENT</span></PolicyHeading>
            <PolicyHeading><span>How do you get my consent?</span></PolicyHeading>
            <PolicyText><span>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only. If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</span></PolicyText>

            <PolicyHeading><span>How do I withdraw my consent?</span></PolicyHeading>
            <PolicyText><span>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at contact@xoxoprotection.com</span></PolicyText>
    <PolicyHeading><span>SECTION 3 - DISCLOSURE</span>S</PolicyHeading>
            <PolicyText><span>SWe may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</span>S</PolicyText>
            <PolicyHeading><span>SSECTION 4 - SHOPIFY</span></PolicyHeading>
            <PolicyText><span>SOur store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you. Your data is stored through Shopify’s data storage, databases and the general Shopify application. They store your data on a secure server behind a firewall.</span></PolicyText>

            <PolicyHeading><span>Payment:</span></PolicyHeading>
            <PolicyText><span>If you choose a direct payment gateway to complete your purchase, then Shopify stores your credit card data. It is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS). Your purchase transaction data is stored only as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is deleted.
</span></PolicyText>
            <PolicyText>All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.
            </PolicyText>
            <PolicyText>PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.
            </PolicyText>
            <PolicyText>
                For more insight, you may also want to read Shopify’s Terms of Service here or Privacy Statement here.
            </PolicyText>

            <PolicyHeading><span>SECTION 5 - THIRD-PARTY SERVICES</span></PolicyHeading>
            <PolicyText><span>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.
</span></PolicyText>
            <PolicyText>
            <span>However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.</span>
            </PolicyText>
            <PolicyText>
                <span>For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.</span>
            </PolicyText>
            <PolicyText>
                <span>In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</span>
            </PolicyText>
            <PolicyText>
            <span>As an example, if you are located in Canada and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, including the Patriot Act.</span>
            </PolicyText>
            <PolicyText>
                <span>Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.</span>
            </PolicyText>

            <PolicyHeading><span>Links</span></PolicyHeading>
            <PolicyText><span>When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.
</span></PolicyText>

            <PolicyHeading><span>SECTION 6 - SECURITY</span></PolicyHeading>
            <PolicyText><span>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
</span></PolicyText>
            <PolicyText><span>If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with a AES-256 encryption. Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.
</span></PolicyText>


            <PolicyHeading><span>COOKIES</span></PolicyHeading>
            <PolicyText><span>Here is a list of cookies that we use. We’ve listed them here so you can choose if you want to opt-out of cookies or not.
</span></PolicyText>
            <PolicyText><span>_session_id, unique token, sessional, Allows Shopify to store information about your session (referrer, landing page, etc).
</span></PolicyText>
            <PolicyText><span>_shopify_visit, no data held, Persistent for 30 minutes from the last visit, Used by our website provider’s internal stats tracker to record the number of visits
</span></PolicyText>
            <PolicyText><span>_shopify_uniq, no data held, expires midnight (relative to the visitor) of the next day, Counts the number of visits to a store by a single customer.
</span></PolicyText>
            <PolicyText><span>cart, unique token, persistent for 2 weeks, Stores information about the contents of your cart.</span></PolicyText>
            <PolicyText><span>_secure_session_id, unique token, sessional</span></PolicyText>
            <PolicyText><span>storefront_digest, unique token, indefinite If the shop has a password, this is used to determine if the current visitor has access.
</span></PolicyText>
            <PolicyHeading><span>SECTION 7 - AGE OF CONSENT</span></PolicyHeading>
            <PolicyText><span>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
</span></PolicyText>
            <PolicyHeading><span>SECTION 8 - CHANGES TO THIS PRIVACY POLICY</span></PolicyHeading>
            <PolicyText><span>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
</span></PolicyText>
            <PolicyText><span>If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
</span></PolicyText>
        </Container>
        <Footer/>
        </div>
    );
};

export default Privacy;
