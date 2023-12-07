import { Link } from "react-router-dom";
import AuthContext from "../../../contexts/authContext";
import { useContext } from "react";

export default function ShopItem({
    _id,
    brand,
    model,
    year,
    price,
    imageUrl,
}) {

    const {
        isAuthenticated,
    } = useContext(AuthContext);

    return (
        <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                    <img className="card-img rounded-0 img-fluid" src={imageUrl} />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    </div>
                </div>
                <div className="card-body">
                    <a href="shop-single.html" className="h3 text-decoration-none">Марка: {brand}</a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>Модел: {model}</li>
                        <li className="pt-2">
                            <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                        </li>
                    </ul>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>Цена: {price}лв.</li>
                        <li className="pt-2">
                            <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                        </li>
                    </ul>
                    {isAuthenticated && (
                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                            <Link to={`/shop/${_id}`}>Описание</Link>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}