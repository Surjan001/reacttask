import "./Reg.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useState } from "react";
import React from "react";
import Card from "../Card/Card";

function Reg (props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const surnameChangeHandler = (e) => {
    setSurname(e.target.value);
  };
  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const passChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const clickHandler = () => {
    const user = {name: name, surname : surname, username: username, password: password, email: email};
    localStorage.setItem(username, JSON.stringify(user));
    setName("");
    setSurname("");
    setUsername("");
    setPassword("");
    setEmail("");
  };
  return (
    <Card className="reg_root">
      <h1>Registration</h1>
      <Input
        type="text"
        labelname="Name"
        onChange={nameChangeHandler}
        value={name}
      />
      <Input
        type="text"
        labelname="Surname"
        onChange={surnameChangeHandler}
        value={surname}
      />
      <Input
        type="number"
        labelname="Phone Num."
        onChange={usernameChangeHandler}
        value={username}
      />
      <Input
        type="password"
        labelname="Password"
        onChange={passChangeHandler}
        value={password}
      />
      <Input
        type="text"
        labelname="E-mail"
        onChange={emailChangeHandler}
        value={email}
      />
      <Button buttonval="Register" onClick={clickHandler} />
    </Card>
  );
}

export default Reg;
