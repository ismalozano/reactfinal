import React, { useState } from 'react';
import "./LoginForm.css";



export default function Iniciar_sesion() {
    
    const [loginData, setLoginData] = useState({
        loginUsername: '',
        loginPassword: '',
    });

    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        repeatEmail: '',
        password: '',
        repeatPassword: '',
    });

    const handleLoginChange = (event) => {
        const { name, value } = event.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleRegisterChange = (event) => {
        const { name, value } = event.target;
        setRegisterData({ ...registerData, [name]: value });
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar la lógica de inicio de sesión, por ejemplo, enviar los datos al servidor
        console.log('Datos de inicio de sesión:', loginData);
    };

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar la lógica de registro, por ejemplo, enviar los datos al servidor
        console.log('Datos de registro:', registerData);
    };

    return (
        <div>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLoginSubmit}>
            <div className="divLoginForm">
                <label htmlFor="">Username</label>
                <input
                type="text"
                name="loginUsername"
                placeholder="Nombre de usuario"
                value={loginData.loginUsername}
                onChange={handleLoginChange}
                className="inputLoginForm"
                />
                <label htmlFor="">Password</label>
                <input
                type="password"
                name="loginPassword"
                placeholder="Contraseña"
                value={loginData.loginPassword}
                onChange={handleLoginChange}
                className="inputpassword"
                />
            </div>
            <button type="submit">Iniciar Sesión</button>
            <br/><br/><br/>
        </form>

        <h2>Registrarse</h2>
        <form onSubmit={handleRegisterSubmit}>
            <div className="divLoginFormRegister">
                <label htmlFor="">Registrarse</label>
                    <input
                    type="text"
                    name="username"
                    placeholder="Nombre de usuario"
                    value={registerData.username}
                    onChange={handleRegisterChange}
                    className="inputUsername"
                    />
                    <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    className="inputEmail"
                    />
                    <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    className="inputPassword"
                    />
                    <input
                    type="password"
                    name="repeatPassword"
                    placeholder="RepetirContraseña"
                    value={registerData.repeatPassword}
                    onChange={handleRegisterChange}
                    className="inputRepeatPassword"
                    />
                    <button type="submit">Registrarse</button>
                    <br/><br/><br/>

            </div>
        </form>
        </div>
  );
}
