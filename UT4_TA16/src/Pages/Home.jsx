import { Link } from "react-router-dom";
import AllowAdmin from "../Components/AllowAdmin";

const Home = () => {
    return (
        <>
            <h2>
                Se Bienvenid@ a la Página Principal!
            </h2>
            <Link to='/about'>Sobre Nosotros!</Link> 
            <br />
            <Link to='/contact'>Contactanos!</Link>
            <br />
            <Link to='/admin'>Página de Admin</Link>
            <br />
            <AllowAdmin></AllowAdmin>
        </>
    )
}

export default Home;