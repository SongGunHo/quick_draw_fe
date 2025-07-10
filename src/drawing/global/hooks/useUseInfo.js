import { useContext } from "react";
import CommonContext from "../../../global/contexts/CommonContext";


export default function useUseInfo (){
    const{
        state :{islogin, loggedMember},
    } = useContext(CommonContext)
}
