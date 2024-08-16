import { Outlet } from "react-router-dom";
import Footer from "../../Pases/Sheard/Footer/Footer";
import Header from "../../Pases/Sheard/Header/Header";
import Navbar from "../../Pases/Sheard/Navbar/Navbar";


const Layout = () => {
    return (
        <>
        <Header/>
        <Navbar/>
        <main className="pt-24 lg:pt-28">
                <Outlet />
            </main>
    
     
        <Footer/>
            
        </>
    );
};

export default Layout;