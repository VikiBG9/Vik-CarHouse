import '../../assets/css/custom.css';
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import * as carService from '../../services/carService';
import * as commentService from '../../services/commentService';
import AuthContext from '../../contexts/authContext';

export default function OneProduct() {
  const { email } = useContext(AuthContext);
  const [car, setCar] = useState({});
  const [comments, setComments] = useState([]);
  const [clearFormData, setClearFormData] = useState({
    comment: "",
  });
  const { carId } = useParams();

  useEffect(() => {
    carService.getDetails(carId)
      .then(setCar);

    commentService.getAll(carId)
      .then(setComments);
  }, [carId]);

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newComment = await commentService.create(
      carId,
      formData.get('comment'),
    );
    console.log(email);
    setComments(state => [...state, { ...newComment, owner: { email } }]);  

    setClearFormData({
      comment: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClearFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="bg-light">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-5 mt-5">
              <img
                className="customPictureDetails"
                src={car.imageUrl}
                alt="Car Image"
              />
              <div className="card">
                <form>
                  <h2 className="comments">Коментари:</h2><hr />
                  {comments.map(({ _id, text, owner: { email } }) => (
                    <ul className="list-inline">
                      <li key={_id} className="list-inline-item">
                        <h5>{email}:</h5>
                      </li>
                      <li className="list-inline-item">
                        <h6>{text}</h6>
                      </li>
                    </ul>
                  ))}
                  {comments.length === 0 && (
                    <p>No comments.</p>
                  )}
                </form>
              </div>
            </div>
            <div className="col-lg-7 mt-5">
              <div className="card">
                <div className="card-body">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h2>Марка:</h2>
                    </li>
                    <li className="list-inline-item">
                      <h3>{car.brand}</h3>
                    </li>
                  </ul>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h2>Модел:</h2>
                    </li>
                    <li className="list-inline-item">
                      <h3>{car.model}</h3>
                    </li>
                  </ul>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h2>Цена:</h2>
                    </li>
                    <li className="list-inline-item">
                      <h3>{car.price}лв.</h3>
                    </li>
                  </ul>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h2>Година на производство:</h2>
                    </li>
                    <li className="list-inline-item">
                      <h3>{car.year}г.</h3>
                    </li>
                  </ul>
                  <li className="list-inline-item">
                    <h2>Описание:</h2>
                  </li>
                  <p>
                    {car.description}
                  </p>
                  <form action="" method="GET">
                    <div className="row pb-3">
                      <div className="col d-grid">
                        <button
                          type="submit"
                          className="btn btn-success btn-lg"
                          name="submit"
                          value="buy"
                        >
                          Купи
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <br></br>
              <div className="card">
                <form className="comments" onSubmit={addCommentHandler}><br />
                  <div>
                    <h4>Остави коментар:</h4>
                    <textarea
                      className="commentsTextArea"
                      name="comment"
                      placeholder="Коментар..."
                      value={clearFormData.comment}
                      onChange={handleInputChange}
                    ></textarea>
                  </div><br />
                  <div>
                    <input type="submit" className="btn btn-success btn-lg" value="Добави коментар" />
                  </div><br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
