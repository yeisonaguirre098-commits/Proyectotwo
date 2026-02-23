import Encabezado from "../components/Encabezado.jsx";
import Navbar from "../components/Navbar.jsx";
import Pie from "../components/Pie.jsx";

import {Outlet} from 'react-router-dom';


const Layout = () => {
    return (
        <>
        <Encabezado />
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Pie />
        
        </>
    )

}

export default Layout;