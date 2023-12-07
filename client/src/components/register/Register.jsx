import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import Path from "../../paths/paths";

const RegisterFormKeys = {
  email: 'email',
  password: 'password',
  passwordConfirm: 'confirm-password'
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.email]: '',
    [RegisterFormKeys.password]: '',
    [RegisterFormKeys.passwordConfirm]: '',
  });

  return (
    <div className="whole">
                <br />  
                <div className="wrapper">
                    <div className="title">
                        Регистрация
                    </div>
                    <form id="login" onSubmit={onSubmit}
                    >
                        <div className="field">
                            <input
                                type="email" required
                                id="email"
                                name={RegisterFormKeys.email}
                                onChange={onChange}
                                value={values[RegisterFormKeys.email]}
                            />
                            <label>Ймейл адрес</label>
                        </div>
                        <div className="field">
                            <input
                                type="password" required
                                id="password"
                                name={RegisterFormKeys.password}
                                onChange={onChange}
                                value={values[RegisterFormKeys.password]}
                            />
                            <label>Парола</label>
                        </div>
                        <div className="field">
                            <input
                                type="password" required
                                id="password-confirm"
                                name={RegisterFormKeys.passwordConfirm}
                                onChange={onChange}
                                value={values[RegisterFormKeys.passwordConfirm]}
                            />
                            <label>Повтори парола</label>
                        </div>
                        <div className="field">
                            <input type="submit" value="Регистрация" />
                        </div>
                        <div className="signup-link">
                            Вече имаш профил? <br />Тогава натисни <Link to={Path.Login}>тук</Link>.
                        </div>
                    </form>
                </div>
                <br /> 
            </div>
  );
}