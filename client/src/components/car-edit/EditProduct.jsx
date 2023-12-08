import { useNavigate, useParams } from "react-router-dom";

import * as carService from "../../services/carService";
import { useEffect, useState } from "react";


export default function EditProduct() {
    const navigate = useNavigate();
    const { carId } = useParams();
    const [car, setCar] = useState({
        brand: '',
        model: '',
        year: '',
        price: '',
        description: '',
        imageUrl: '',
    });

    useEffect(() => {
        carService.getDetails(carId)
        .then( result => {
            setCar(result);
        });
    }, [carId]);

    const editCarSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await carService.edit(carId, values);

            navigate('/shop');
        } catch (err) {
            //Error notification
            console.log(err);
        }
    };

    const onChange = (e) => {
        setCar(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
      <div className="reg-bod">
        <div className="reg-container">
          <div><h4>Променете желаните от вас данни:</h4></div>
          <div className="content">
            <form id="create " onSubmit={editCarSubmitHandler}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Марка на кола:</span>
                  <input type="text" id="brand" name="brand" value={car.brand} onChange={onChange} placeholder="Въведи марка..."/>
                </div>
                <div className="input-box">
                  <span className="details">Модел на кола:</span>
                  <input type="text" id="model" name="model" value={car.model} onChange={onChange} placeholder="Въведи модел..."/>
                </div>
                <div className="input-box">
                  <span className="details">Година на производство:</span>
                  <input type="number" id="year" name="year" min="1886" value={car.year} onChange={onChange} placeholder="Въведи година..."/>
                </div>
                <div className="input-box">
                  <span className="details">Сума $:</span>
                  <input type="number" id="price" name="price" value={car.price} onChange={onChange} placeholder="Въведи пари..."/>
                </div>
                <div className="input-box">
                  <span className="details">Описание:</span>
                  <input type="text" id="description" name="description" value={car.description} onChange={onChange} placeholder="Напиши описание..."/>
                </div>
                <div className="input-box">
                  <span className="details">Снимка:</span>
                  <input type="text" id="imageUrl" name="imageUrl" value={car.imageUrl} onChange={onChange} placeholder="Сложи снимка..."/>
                </div>
              </div>
              <div className="reg-button">
                <input type="submit" value="Направи промени"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }