import React from 'react';
import '@styles/components/Register.scss'

const Register = () => (
  <section className="register">
    <section className="register__container">
      <h2>Regístrate</h2>
      <form className="register__container--form">
        <input className="input" type="text" placeholder="Name" />
        <input className="input" type="text" placeholder="Email" />
        <input className="input" type="password" placeholder="Pasword" />
        <button className="button">Register</button>
      </form>
      <a href="/login">Iniciar sesión</a>
    </section>
  </section>
);

export default Register;
