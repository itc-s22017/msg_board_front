import React from 'react'
import './Header.css';
import { useAuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const { logout } = useAuthContext();
    const navigate = useNavigate();

    return (
        <div className="message-board">
            <p onClick={() => navigate("/")} className='goHome'>メッセージボード</p>
            <p className='logout' onClick={logout}>ログアウト</p>
        </div>
    );
}

export default Header;
