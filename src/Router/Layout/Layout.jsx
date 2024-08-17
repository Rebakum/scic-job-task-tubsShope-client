import { Outlet } from "react-router-dom";
import Footer from "../../Pases/Sheard/Footer/Footer";
import Header from "../../Pases/Sheard/Header/Header";


const Layout = () => {
    return (
        <>
        <Header/>     
        <main className="pt-24 lg:pt-28">
                <Outlet />
            </main>
    
     
        <Footer/>
            
        </>
    );
};

export default Layout;