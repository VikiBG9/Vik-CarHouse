import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import AuthContext from './contexts/authContext';
import * as authService from './services/authService';
import Path from './paths/paths';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import About from './components/about/About';
import OneProduct from './components/details/OneProduct';
import CreateProduct from './components/car-create/CreateProduct';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/logout';
import NotFound from './components/notFound/NotFound';

function App() {
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
    isAuthenticated: !!auth.accessToken,
  }

  return (
    <AuthContext.Provider value={values}>
      <div>
        <Header />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.About} element={<About />} />
          <Route path={Path.Shop} element={<Shop />} />
          <Route path={Path.ShopCreate} element={<CreateProduct />} />
          <Route path={Path.Details} element={<OneProduct />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Logout} element={<Logout />} />
          <Route path={Path.ErrorPage} element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </AuthContext.Provider>
  )
}

export default App

import './assets/css/bootstrap.min.css';
import './assets/css/custom.css';
import './assets/css/fontawesome.css';
import './assets/css/fontawesome.min.css';
import './assets/css/slick-theme.css';
import './assets/css/slick-theme.min.css';
import './assets/css/slick.min.css';
import './assets/css/templatemo.css';
import './assets/css/templatemo.min.css';
import './assets/css/errorPage.css';
import './assets/css/login.css';
import './assets/css/register.css';

