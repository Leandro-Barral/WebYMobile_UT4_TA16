import { useParams } from "react-router-dom"

const Product = () => {
    let {id} = useParams();

    return(
        <div>Producto {id}</div>
    )
}

export default Product;