import './Login.css';
import Card from '../Card/Card';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState } from "react";

function Login (props) {
    const [logusername, setLogusername]=useState("");
    const [logpass, setLogpass] = useState("");
    // const [getdata, setGetdata] = useState();

    const logChangeHandler = (e) =>{
        setLogusername(e.target.value);
    };
    const passChangeHandler = (e) =>{
        setLogpass(e.target.value)
    };

    const logClickHandler = () =>{
        console.log(JSON.parse(localStorage.getItem(logusername)))
        setLogusername('');
        setLogpass('');
    };   
    
    return(
            <Card>
            <h1>Log In</h1>
            <Input type='number' labelname='Phone Num.' value={logusername} onChange={logChangeHandler}/>
            <Input type='password' labelname='Password' value={logpass} onChange={passChangeHandler} />
            <Button buttonval='Log in' onClick={logClickHandler}/>
        </Card>
    );
}

export default Login;