import { Routes, Route, useNavigate } from 'react-router-dom';

import { AuthProvider} from './contexts/authContext';
import Path from './paths/paths';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import About from './components/about/About';
import OneProduct from './components/details/OneProduct';
import CreateProduct from './components/car-create/CreateProduct';
import EditProduct from './components/car-edit/EditProduct';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/logout';
import NotFound from './components/notFound/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import AuthenticationGuard from './components/guards/AuthenticationGuard';

function App() {
  return (
    <ErrorBoundary>
    <AuthProvider>
      <div>
        <Header />

        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.About} element={<About />} />
          <Route path={Path.Shop} element={<Shop />} />
          <Route path={Path.ShopCreate} element={<AuthenticationGuard><CreateProduct /></AuthenticationGuard>} />
          <Route path={Path.Details} element={<AuthenticationGuard><OneProduct /></AuthenticationGuard>} />
          <Route path={Path.Edit} element={<AuthenticationGuard><EditProduct /></AuthenticationGuard>} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Logout} element={<AuthenticationGuard><Logout /></AuthenticationGuard>} />
          <Route path={Path.ErrorPage} element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </AuthProvider>
    </ErrorBoundary>
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

