import { useContext, useState } from "react";
import UserContext from "../Contexts/Contexts"

const AllowAdmin = () => {
    const userInfo = useContext(UserContext);
    const [allowed, setAllowed] = useState(false)
    const TogglePermission = () => {
        userInfo.allowed = userInfo.allowed ? false : true;
        setAllowed(userInfo.allowed)
    }

    return (
        <>
            <button onClick = {TogglePermission}>
                Permiso de Admin: {allowed ? "Activado" : "Desactivado"}
            </button>
        </>
    )
}

export default AllowAdmin;