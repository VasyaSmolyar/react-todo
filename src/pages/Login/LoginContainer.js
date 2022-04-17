import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginView from "./LoginView";
import { postLoginQuery } from 'services/userServices';
import { required, email as isEmail} from 'validators';
import JWTContext from "context/jwt";
import { TODOS } from "navigation/CONSTANTS";

export const LoginContainer = () => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useContext(JWTContext);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {
      email: isEmail(email) || required(email),
      password: required(password)
    }
    setErrors(newErrors);
    return !newErrors.password && !newErrors.email;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(!validate()) {
      return;
    }

    setLoading(true);
    postLoginQuery({
      email,
      password
    })
    .then((data) => {
      login(data);
      setLoading(false);
      navigate(TODOS);
    });
  }

  return (
    <LoginView
      errors={errors}
      loading={loading}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit} 
    />
  )
}
