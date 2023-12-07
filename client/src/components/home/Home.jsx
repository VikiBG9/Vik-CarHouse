export default function Home() {
    return (
        <div>
            <div className="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="w-100 pt-1 mb-5 text-right">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="" method="get" className="modal-content modal-body border-0 p-0">
                    <div className="input-group mb-2">
                        <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..."/>
                        <button type="submit" className="input-group-text bg-success text-light">
                            <i className="fa fa-fw fa-search text-white"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    
    
    
        <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container">
                        <div className="row p-5">
                            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img className="img-fluid" src='/img/Hyundai-Verna-220320231923-removebg-preview.png' alt=""/>
                            </div>
                            <div className="col-lg-6 mb-0 d-flex align-items-center">
                                <div className="text-align-left align-self-center">
                                    <h1 className="h1 text-success"><b>VIK</b>-CARHOUSE</h1>
                                    <h3 className="h2">Най-добрите на пазара!</h3>
                                    <p>
                                        Добре дошли в Vik-CarHouse - вашият онлайн дом за стилни и качествени автомобили!<br/>
                                        В нашия широк асортимент ще откриете разнообразие от марки и модели, които отговарят на всякакви вкусове и предпочитания.<br/>
                                        Не се колебайте да се свържете с нашия екип от експерти,
                                        готови да ви помогнат с всяко запитване и да ви предоставят необходимата информация <a rel="sponsored" className="text-success" href="https://stories.freepik.com/" target="_blank">тук</a>.<br/>
                                        Изборът на вашия следващ автомобил никога не е бил по-удобен и приятен!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> 
        </div>
    );
}