import Footer from "../src/components/FooterComponent";
import Navbar from "../src/components/NavbarComponent";
import BuyButton from "../src/components/BuyButton";

const ListPage = () => {
    return (
        <div>
            <style jsx global>{`
      body { 
      margin:0;
      padding:0;
      font-size:10px;
      font-family:Poppins;
      }
    `}</style>
            <Navbar/>
            <Footer/>
            <BuyButton/>
        </div>
    )
}

export default ListPage;

