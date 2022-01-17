import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { Todo } from "./Todo";

export const  Logout = () =>  {
const user = useSelector(selectUser)
const dispatch = useDispatch();
const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout())

}
    return (
        <div>
            <h1>Welcome <span>{user.name}</span> to The Admin Dasboard
            <button onClick={(e) => handleLogout(e)}>Log Out</button> </h1>
            <div>
                <h3>ADD NEW JOB DETAILS HERE</h3>
            </div>
            <Todo/>
        </div>
    )
}
