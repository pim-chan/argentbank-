import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { login } from '../reducers/userSlice';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const formData = {
                email: email,
                password: password,
            };
            const response = await axios.post('http://localhost:3001/api/v1/user/login', formData);
            
            const token = response.data.body.token;
            
            dispatch(login(token)); 

            navigate('/profil')

        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrorMessage('Identifiants incorrects. Veuillez réessayer.');
            } else {
                console.error('Erreur lors de la connexion :', error);
            }
        }
    };

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        const storedRemember = localStorage.getItem('remember');

        if (storedEmail && storedPassword && storedRemember === 'true') {
            setEmail(storedEmail);
            setPassword(storedPassword);
            setRemember(true);
        }
    }, []);

    const saveUserInfos = () => {
        if (remember) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('remember', 'true');
        } else {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            localStorage.removeItem('remember');
        }
    }

return (
    <div>
        {errorMessage && <div className='error-msg'>{errorMessage}</div>}
        <form className='signin-form' onSubmit={(e) => handleSubmit(e)}>
            <div className='input-wrapper'>
                <label htmlFor="username">Username</label>
                <input
                    className='input'
                    type="text"
                    id="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className='input-wrapper'>
                <label htmlFor="password">Mot de passe :</label>
                <input
                    className='input'
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className='remember-me'>
                <label>
                    <input
                        type="checkbox"
                        name="remember"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                    />
                    Remember me
                </label>
            </div>
            <button className="button" onClick={saveUserInfos}>Sign In</button>
        </form>
    </div>
);

};

export default SignInForm;