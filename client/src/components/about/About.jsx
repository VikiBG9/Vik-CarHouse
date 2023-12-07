export default function About() {
    return (
        <>
            <div
                className="modal fade bg-white"
                id="templatemo_search"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg" role="document">
                    <div className="w-100 pt-1 mb-5 text-right">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <form
                        action=""
                        method="get"
                        className="modal-content modal-body border-0 p-0"
                    >
                        <div className="input-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                id="inputModalSearch"
                                name="q"
                                placeholder="Search ..."
                            />
                            <button
                                type="submit"
                                className="input-group-text bg-success text-light"
                            >
                                <i className="fa fa-fw fa-search text-white" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <section className="bg-success py-5">
                <div className="container">
                    <div className="row align-items-center py-5">
                        <div className="col-md-8 text-white">
                            <h1>За нас</h1>
                            <p>                               
                             Добре дошли в Vik-CarHouse - вашият онлайн дом за стилни и качествени автомобили! Ние сме вашият надежден партньор в света на автомобилите, предоставяйки ви едно уникално преживяване при избора и закупуването на вашия следващ автомобил.<br/>
                             С удоволствие ще откриете, че нашият уебсайт е лесен за навигация, със съвременен дизайн и функционалности, които ви помагат да намерите точно този автомобил, който отговаря на вашите изисквания.<br/>
                             Vik-CarHouse, където вашият автомобилен избор става лесен и приятен процес!
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src="/img/AdobeStock_291895827ed-removebg-preview.png" alt="About" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container py-5">
                <div className="row text-center pt-5 pb-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Нашите услуги</h1>
                        <p>
                            Насладете се на голям брой удобства и предимства на нашия онлайн сайт!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center">
                                <i className="fa fa-truck fa-lg" />
                            </div>
                            <h2 className="h5 mt-4 text-center">Услуги за доставка до адрес</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center">
                                <i className="fas fa-exchange-alt" />
                            </div>
                            <h2 className="h5 mt-4 text-center">30 дневен срок за тестване на автомобила / опция за връщане</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center">
                                <i className="fa fa-percent" />
                            </div>
                            <h2 className="h5 mt-4 text-center">Промоции</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center">
                                <i className="fa fa-user" />
                            </div>
                            <h2 className="h5 mt-4 text-center">24 часово обслужване</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-light py-5">
                <div className="container my-4">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Нашите марки партньори</h1>
                            <p>
                                Отвърдено качество и гаранция. Заедно се опитваме да улесним намирането ви на автомобил.
                            </p>
                        </div>
                        <div className="col-lg-9 m-auto tempaltemo-carousel">
                            <div className="row d-flex flex-row">
                                
                                <div className="carousel-inner product-links-wap" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                                <a href="#">
                                                    <img
                                                        className="img-fluid brand-img"
                                                        src="/img/Mercedes-Logo.svg__1_-removebg-preview.png"
                                                        alt="Brand Logo"
                                                    />
                                                </a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#">
                                                    <img
                                                        className="img-fluid brand-img"
                                                        src="/img/Audi-Logo-Banner-removebg-preview.png"
                                                        alt="Brand Logo"
                                                    />
                                                </a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#">
                                                    <img
                                                        className="img-fluid brand-img"
                                                        src="/img/345_volkswagen_logo-removebg-preview.png"
                                                        alt="Brand Logo"
                                                    />
                                                </a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#">
                                                    <img
                                                        className="img-fluid brand-img"
                                                        src="/img/valencia-spain-march-29-2023-600nw-2282038799-removebg-preview.png"
                                                        alt="Brand Logo"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}