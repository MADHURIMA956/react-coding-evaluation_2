
import './App.css';
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";

import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="App">
      <h1>Job Application</h1>
      
      <div className='mainDiv'>
        {user ? <Logout/> : <Login/>}
      </div>
    </div>
  );
}

export default App;
