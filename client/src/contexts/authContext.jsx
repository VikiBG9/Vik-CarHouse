import { createContext, useState } from "react";
import * as authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import Path from "../paths/paths";

//TODO: Error messages and validation
const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
  children,
}) => {
  const navigate = useNavigate();

  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');

    return {};
  });

  const loginSubmitHandler = async (values) => {
      const result = await authService.login(values.email, values.password);

      setAuth(result);
      //TODO: TRY CATCH if its not valid login(some kind of message)
      localStorage.setItem('accessToken', result.accessToken);

      navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
   
      const result = await authService.register(values.email, values.password);

      setAuth(result);
      //TODO: TRY CATCH if its not valid login(some kind of message)
      localStorage.setItem('accessToken', result.accessToken);
      navigate(Path.Home);
    
  };


  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;