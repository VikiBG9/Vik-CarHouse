import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';

const LoginFormKeys = {
    email: 'email',
    password: 'password',
};

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.email]: '',
        [LoginFormKeys.password]: '',
    });

    return (
            <div className="whole">
                <br />  
                <div className="wrapper">
                    <div className="title">
                        Вход
                    </div>
                    <form id="login" onSubmit={onSubmit}>
                        <div className="field">
                            <input
                                type="email" required
                                id="email"
                                name={LoginFormKeys.email}
                                onChange={onChange}
                                value={values[LoginFormKeys.email]}
                            />
                            <label>Ймейл адрес</label>
                        </div>
                        <div className="field">
                            <input
                                type="password" required
                                id="login-password"
                                name={LoginFormKeys.password}
                                onChange={onChange}
                                value={values[LoginFormKeys.password]}
                            />
                            <label>Парола</label>
                        </div>
                        <div className="field">
                            <input type="submit" value="Влизане" />
                        </div>
                        <div className="signup-link">
                            Не си потребител? <Link to="/register">Регистрирай се сега</Link>
                        </div>
                    </form>
                </div>
                <br /> 
            </div>
    );
}