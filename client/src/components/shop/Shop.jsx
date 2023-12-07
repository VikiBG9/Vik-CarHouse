import { useEffect, useState } from 'react';

import * as carService from '../../services/carService';
import ShopItem from './shop-item/ShopItem';

export default function Shop() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then(result => setCars(result));
    }, []);

    console.log(cars);

    return (

        <div>
            <div className="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="w-100 pt-1 mb-5 text-right">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="" method="get" className="modal-content modal-body border-0 p-0">
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                            <button type="submit" className="input-group-text bg-success text-light">
                                <i className="fa fa-fw fa-search text-white"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                            {cars.map(car => (
                                <ShopItem key={car._id} {...car} />
                            ))}
                            {cars.length === 0 && (
                                <h3>No cars yet</h3>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <script src="assets/js/jquery-1.11.0.min.js"></script>
            <script src="assets/js/jquery-migrate-1.2.1.min.js"></script>
            <script src="assets/js/bootstrap.bundle.min.js"></script>
            <script src="assets/js/templatemo.js"></script>
            <script src="assets/js/custom.js"></script>
        </div>
    );
}