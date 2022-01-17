import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

export const Login = () => {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedin : true
        }))
    }
    return (
        <div>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="">Nmae</label>
                <input type="text" placeholder='name' 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                /><br />
                <label htmlFor="">Email</label>
                <input type="text" 
                placeholder='enter emial' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                /><br />
                <label htmlFor="">Password</label>
                <input type="password" 
                placeholder='enter password'
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 /> <br />
                 <button type="submit">Log In</button>
            </form>
        </div>
    )
}
