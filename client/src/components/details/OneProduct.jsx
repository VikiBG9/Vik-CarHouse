import '../../assets/css/custom.css';
import { useContext, useEffect, useMemo, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import * as carService from '../../services/carService';
import * as commentService from '../../services/commentService';
import AuthContext from '../../contexts/authContext';
import reducer from './commentReducer';
import { useForm } from '../../hooks/useForm';
import Path from '../../paths/paths';
import { pathToUrl } from '../../utills/pathUtills';

export default function OneProduct() {
  const navigate = useNavigate();
  const { email, userId } = useContext(AuthContext);
  const [car, setCar] = useState({});
  const [comments, dispatch] = useReducer(reducer, []);
  const { carId } = useParams();

  useEffect(() => {
    carService.getDetails(carId)
      .then(setCar);

    commentService.getAll(carId)
      .then((result) => {
        dispatch({
          type: 'GET_ALL_COMMENTS',
          payload: result,
        });
      });
  }, [carId]);

  const addCommentHandler = async (values) => {
    const newComment = await commentService.create(
      carId,
      values.comment,
    );

    newComment.owner = { email };

    dispatch({
      type: 'ADD_COMMENT',
      payload: newComment,
    });

    onChange({ target: { name: 'comment', value: '' } });
  };

  const deleteBtnClickHandler = async () => {
    const confirmedMessage= confirm(`Сигурен ли си, че искаш да закупиш ${car.brand} ${car.model}?`);

    if (confirmedMessage) {
      await carService.remove(carId);

      navigate('/shop');
    }
  }
  
  const { values, onChange, onSubmit } = useForm(addCommentHandler, {
    comment: '',
  });

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
                  {userId === car._ownerId && (
                    <div className="col d-grid">
                      <hr />
                      <button className="btn btn-success btn-lg" onClick={deleteBtnClickHandler}>Купи</button><br />
                      <Link to={pathToUrl(Path.Edit, { carId })} className="btn btn-success btn-lg">Промяна на данни</Link>
                    </div>
                  )}
                </div>
              </div>
              <br></br>
              <div className="card">
                <form className="comments" onSubmit={onSubmit}><br />
                  <div>
                    <h4>Остави коментар:</h4>
                    <textarea
                      className="commentsTextArea"
                      name="comment"
                      placeholder="Коментар..."
                      value={values.comment}
                      onChange={onChange}
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
