import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <footer className="bg-dark" id="tempaltemo_footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-success border-bottom pb-3 border-light logo">
                            Vik-CarHouse
                        </h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw" />
                                бул. "Паисий Хилендарски" №9, 2700 Благоевград, обл. Благоевград, България
                            </li>
                            <li>
                                <i className="fa fa-phone fa-fw" />
                                <a className="text-decoration-none" href="tel:0887657892"> 
                                     999-21-61-991
                                </a>
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw" />
                                <a className="text-decoration-none" href="mailto:Vik-CarHouse@abv.bg">
                                    Vik-CarHouse@abv.bg
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">
                            Повече информация
                        </h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <Link className="text-decoration-none" to="/">
                                    Начална страница
                                </Link>
                            </li>
                            <li>
                                <Link className="text-decoration-none" to="/about">
                                    За нас
                                </Link>
                            </li>
                            <li>
                                Въпроси?

                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="w-100 bg-black py-3">
                <div className="container">
                    <div className="row pt-2">
                        <div className="col-12">
                            <p className="text-left text-light">
                                Copyright © 2023 Vik-Carhouse
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>



    )

}