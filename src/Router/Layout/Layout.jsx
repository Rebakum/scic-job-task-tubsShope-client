import { Outlet } from "react-router-dom";
import Footer from "../../Pases/Sheard/Footer/Footer";
import Header from "../../Pases/Sheard/Header/Header";


const Layout = () => {
    return (
        <>
            <Header />

            <Outlet />


            <Footer />

        </>
    );
};

export default Layout;