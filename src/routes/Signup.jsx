import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';


const Signup = () => {
    const { signup } = useAuthContext();
    const nameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        signup({
            name:nameRef.current.value,
            pass:passwordRef.current.value
        })
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='registration'>
                <h1>ユーザ登録</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
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
                        <button className="registrationbutton" type="submit">ユーザ登録</button>
                    </div>
                </form>
                <div>
                    ログインは<Link to="/login">こちら</Link>
                </div>
            </div>
        </div>
    );
};


export default Signup