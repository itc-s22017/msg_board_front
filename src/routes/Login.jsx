import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuthContext();
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    login({
      pass:passwordRef.current.value,
      name:nameRef.current.value
    })
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className='registration'>
        <h1>ログイン</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>name:</label>
            <input id="name" name="name" ref={nameRef} />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
            />
          </div>
          <div>
            <button className="registrationbutton" type="submit">ログイン</button>
          </div>
        </form>
        <div>
          ユーザ登録は<Link to="/signup">こちら</Link>
        </div>
      </div>
    </div>
  )
}

export default Login