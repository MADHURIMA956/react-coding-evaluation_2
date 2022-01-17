import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

export const  Logout = () =>  {
    
const dispatch = useDispatch();
const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout())

}
    return (
        <div>
            <h1>Welcome <span>{}</span></h1>
            <button onClick={(e) => handleLogout(e)}>Log Out</button>
        </div>
    )
}
