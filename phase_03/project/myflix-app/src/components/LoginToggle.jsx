import { useContext, useState } from "react";
import {Button} from '@mui/material';

import UserContext from "../context/UserContext";


const LoginToggle = () => {

    const [text, setText] = useState('Welcome');
    const [btnText, setBtnText] = useState('Login');

    const {user} = useContext(UserContext);

    const toggleBtn = (e) => {
        if(e.target.innerText == 'Login'){
            setBtnText('Logout');
            setText(`Hello ${user}`);
        }
        else{
            setBtnText('Login');
            setText('Welcome');
        }
    }
    return (
        <div style={{display:'flex', justifyContent:"space-between"}}>
            <p>{text}</p>
            <button className="button" onClick={toggleBtn}>{btnText}</button>
            <Button variant="contained">Contained</Button>
        </div>
    )
}

export default LoginToggle;


// const Profile = () => {
//     const [isLogged, setIsLogged] = useState(false);
 
//     const context = isLogged ? <span>Welcome User</span> : <span>Welcome Guest</span>;
 
//     return (
//         <div style={{ float: 'right', display: 'inline-block', fontWeight: 'bolder', padding: '5px' }}>
//             {context} <br />
//             <button onClick={() => setIsLogged(!isLogged)}>
//                 {isLogged ? 'Logout' : 'Login'}
//             </button>
 
//         </div>
//     );
// };
 
// export default Profile;