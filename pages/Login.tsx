import Navbar from "../src/components/NavbarComponent";
import Footer from "../src/components/Footer/FooterComponent";
import LoginForm from "../src/components/Forms/LoginFormComponent";


const Login = () => {
    return(
        <div>
            <Navbar/>
            <LoginForm/>
            <Footer/>
        </div>
    )
};
export default Login;