import { useContext } from "react";
import CommonContext from "../../../global/contexts/CommonContext";

export default function useLogout ()
{

    const(
        {actions: {setIsLogin , setLoggedMember}},
    ) = useContext(CommonContext);
    return () =>{

    }
}