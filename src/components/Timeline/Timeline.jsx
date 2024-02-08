import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Message from '../Message/Message';
import Pagination from '../Pagenation/Pagination';
import { useAuthContext } from '../../context/AuthContext';

const Timeline = ({ userScreen, home }) => {
    const MAX_ITEMS_PER_PAGE = 3;
    const [messages, setMessages] = useState([]);
    const [total, setTotal] = useState(null)
    const { setCurrentPage, currentPage } = useAuthContext();
    const handleSetValue = (newVal) => {
        setCurrentPage(newVal)
    }

    const fetchMessages = async () => {
        if (userScreen) {
            try {
                const messages = await axios.get(`http://localhost:3030/messages/${userScreen.id}/read?page=${userScreen.page}`, { withCredentials: true })
                setMessages(messages.data.messages)
                setTotal(messages.data.totalCount)
            } catch (e) {
                console.log(e)
            }
        } else if (home) {
            try {
                const messages = await axios.get(`http://localhost:3030/messages/read?page=${home.page}`, { withCredentials: true })
                setMessages(messages.data.messages)
                setTotal(messages.data.totalCount)
            } catch (e) {
                console.log(e)
            }
        }
    }

    useEffect(() => {
        fetchMessages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])
    return (
        <>
            {messages.map(message => (
                <Message message={message} key={message.id} />
            ))}
            <Pagination MAX={total} setValue={handleSetValue} itemsPerPage={MAX_ITEMS_PER_PAGE} />

        </>
    )
}

export default Timeline