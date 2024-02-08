import React from 'react'
import "./Message.css"
import { useNavigate } from 'react-router-dom';

const Message = ({ message }) => {
    const navigate = useNavigate()
    const { text, createdAt } = message;
    const { name, id } = message.account;
    const formatCreatedAt = (createdAt) => {
        const date = new Date(createdAt);
        return date.toLocaleString();
    };
    return (
        <div className="tweet-container">
            <div>
                <strong onClick={()=>navigate(`/user/${id}`)}>{name}</strong>
            </div>
            <div className="tweet-text">
                {text}
            </div>
            <div className="tweet-created-at">
                {formatCreatedAt(createdAt)}
            </div>
        </div>
    );
}

export default Message;
