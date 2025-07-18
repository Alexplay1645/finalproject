import React, { useState } from 'react';
import './LoginPage.css';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
  setShowPassword(prev => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Форма отправлена');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <button className="back-button">
          <img src="/Icons/VectorLeft.png" alt="Назад" />
        </button>
        <div className="login-left-box">
          <span>ЗАПОВНІТЬ ВХІД ДО</span><br />
          <span>ОБЛІКОВОГО ЗАПИСУ</span>
        </div>
        <img src="/image/Rectangle 2.png" className="left-bg-image" alt="Фон" />
      </div>

      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Електронна пошта або мобільний номер</label>
          <input type="text" id="email" className="main-input" />

          <div className="privacy-container">
            <p className="privacy-note">
              By entering your mobile number and one-time code sign-in option, you agree to receive a one-time verification code via SMS from IKEA. Message and data rates may apply.
            </p>
            <button type="button" className="privacy-link">More info about Privacy Policy</button>
          </div>

          <label htmlFor="password">Пароль</label>
          <div className="password-field">
            <input type="text" id="password" className="password-input"/>
            <img
              src="/icons/Vector45.png"
              alt="Показати пароль"
              className="eye-icon"
              onClick={togglePassword}
            />
          </div>

          <a href="#" className="forgot-password">Забули свій пароль?</a>

          <div className="remember-block">
            <input type="checkbox" className="btn-checkbox" />
            <label htmlFor="remember">Зберегти інформацію</label>
            <img src="/icons/Vector34.png" alt="Інформація" className="info-icon" />
          </div>

          <button type="submit" className="submit-btn">ПРОДОВЖИТИ</button>

          <div className="create-account">
            <p>У вас ще немає облікового запису? Створіть його:</p>
            <button type="button" className="create-btn">СТВОРИТИ АККАУНТ</button>
          </div>
        </form>
      </div>
    </div>
  );
}
