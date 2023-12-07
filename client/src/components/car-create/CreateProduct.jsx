import { useNavigate } from "react-router-dom";

import * as carService from "../../services/carService";


export default function CreateProduct() {
    const navigate = useNavigate();

    const createCar = async (e) => {
        e.preventDefault();

        const carData = Object.fromEntries(new FormData(e.currentTarget))
        try {
            await carService.create(carData);

            navigate('/shop');
        } catch (err) {
            //Error notification
            console.log(err);
        }
    }

    return (
      <div className="reg-bod">
        <div className="reg-container">
          <div className="reg-title">Вкарайте кола в сервиза</div>
          <div className="content">
            <form id="create " onSubmit={createCar}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Марка на кола:</span>
                  <input type="text" id="brand" name="brand" placeholder="Въведи марка..."/>
                </div>
                <div className="input-box">
                  <span className="details">Модел на кола:</span>
                  <input type="text" id="model" name="model" placeholder="Въведи модел..."/>
                </div>
                <div className="input-box">
                  <span className="details">Година на производство:</span>
                  <input type="number" id="year" name="year" min="1886" placeholder="Въведи година..."/>
                </div>
                <div className="input-box">
                  <span className="details">Сума $:</span>
                  <input type="number" id="price" name="price" placeholder="Въведи пари..."/>
                </div>
                <div className="input-box">
                  <span className="details">Описание:</span>
                  <input type="text" id="description" name="description" placeholder="Напиши описание..."/>
                </div>
                <div className="input-box">
                  <span className="details">Снимка:</span>
                  <input type="text" id="imageUrl" name="imageUrl" placeholder="Сложи снимка..."/>
                </div>
              </div>
              <div className="reg-button">
                <input type="submit" value="Вкрай кола в сервиза"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }