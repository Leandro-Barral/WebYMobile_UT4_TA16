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

            <Link to='/product/1'>Producto 1</Link>
            <Link to='/product/2'>Producto 2</Link>
            <Link to='/product/3'>Producto 3</Link>
            <Link to='/product/4'>Producto 4</Link>
            <Link to='/product/5'>Producto 5</Link>
            <Link to='/product/6'>Producto 6</Link>
            <Link to='/product/7'>Producto 7</Link>
            <Link to='/product/8'>Producto 8</Link>

            <AllowAdmin></AllowAdmin>
        </>
    )
}

export default Home;