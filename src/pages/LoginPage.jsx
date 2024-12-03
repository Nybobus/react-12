import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context';

const LoginPage = () => {

   const {login, user, isAuth} = useAppContext()
   const [username, setUsername] = useState('')

   console.log( );
   

   const handleSignup = (e) => {
      e.preventDefault()
      if (username) {
         login(username)
         alert(`welcome back ${username} `)
      }
   }
   

  return (
    <>
      <section className="login">
        <div className="container">
          <h2 className="Login-title">Войти в аккаунт</h2>
          <form action="" onSubmit={handleSignup}> 
          <input
             type="text"
             placeholder='Username'
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             />
            <input type="text" placeholder="Password" />
            <button type="submit">Login</button>
            <Link to={'/signup'}>Зарегестрироваться</Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
