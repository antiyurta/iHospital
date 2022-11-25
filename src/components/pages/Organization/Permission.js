import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get } from "../../comman";

function Permission() {
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    };
    const [permissions, setPermissions] = useState([]);
    const getPermissions = async () => {
        const response = await Get('organization/permission', token, config);
        setPermissions(response.data);
    };
    useEffect(() => {
        getPermissions();
    }, []);
    return (
        <>
            s</>
    )
}
export default Permission;