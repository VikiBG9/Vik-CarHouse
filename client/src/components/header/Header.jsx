import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Path from '../../paths/paths';
import AuthContext from '../../contexts/authContext';

export default function Header() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link
                        className="navbar-brand text-success logo h1 align-self-center"
                        to={Path.Home}
                    >
                        <h1>Vik-CarHouse</h1>
                        {isAuthenticated && (
                            <h4>{username}</h4>
                        )}
                    </Link>
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#templatemo_main_nav"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                        id="templatemo_main_nav"
                    >
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">

                                <Link className="nav-link" to={Path.Home}>
                                    Начална страница
                                </Link>
                                <Link className="nav-link" to={Path.About}>
                                    За нас
                                </Link>

                                <Link className="nav-link" to={Path.Shop}>
                                    Магазин
                                </Link>

                                {isAuthenticated && (
                                    <Link className="nav-link" to={Path.ShopCreate}>
                                        Вкарай кола
                                    </Link>
                                )}
                                {!isAuthenticated && (
                                    <Link className="nav-link" to={Path.Register}>
                                        Регистрация
                                    </Link>
                                )}
                                {!isAuthenticated && (
                                    <Link className="nav-link" to={Path.Login}>
                                        Вход
                                    </Link>
                                )}
                                {isAuthenticated && (
                                    <Link className="nav-link" to={Path.Logout}>
                                        Изход
                                    </Link>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}