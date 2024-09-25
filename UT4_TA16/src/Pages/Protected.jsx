import { useContext } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../Contexts/Contexts";
import { Navigate } from "react-router-dom";

const Protected = () => {
    const userInfo = useContext(UserContext);

    return(
        userInfo.allowed ? <Outlet /> : <Navigate to='/'></Navigate>
    )
}

export default Protected;