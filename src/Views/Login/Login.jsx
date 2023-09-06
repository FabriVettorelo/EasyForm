import React, { useState } from "react";
import style from "./Login.module.css";
import "./animations.css"; // Importa las animaciones CSS

import FormLogin from "../../Components/FormLogin/FormLogin";
import SignUp from "../../Components/SignUp/SignUp";

const Login = () => {
  const [showFormLogin, setShowFormLogin] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [toggleAnimation, setToggleAnimation] = useState(false);

  // Función para alternar entre FormLogin y SignUp
  const toggleForm = () => {
    setShowFormLogin(!showFormLogin);
    setShowSignUp(!showSignUp);
    setToggleAnimation(!toggleAnimation);
  };

  return (
    <div className={style.container}>
      {showFormLogin && (
        <FormLogin key="formLogin" toggleForm={toggleForm} toggleAnimation={toggleAnimation}/>
      )}
      {showSignUp && (
        <SignUp key="signUp" toggleForm={toggleForm} toggleAnimation={toggleAnimation}/>
      )}
    </div>
  );
};

export default Login;