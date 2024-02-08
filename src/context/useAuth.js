import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const [user, setUser] = useState({});
    const [currentPage, setCurrentPage] = useState(1)
    const navigate = useNavigate();

    const signup = async (data) => {
        try {
            await axios.post("http://localhost:3030/users/signup", data)
            navigate("/login")
        } catch (e) {
            window.alert("ID OR PASSWORD が違います!!!!!")
        }
    };

    const login = async (data) => {
        try {
            const res = await axios.post("http://localhost:3030/users/login", data, { withCredentials: true })
            setUser(res.data.user)
            navigate("/")
        } catch (e) {
            window.alert("ID OR PASSWORD が違います!!!!!")
        }
    };

    const logout = async () => {
        try {
            await axios.get("http://localhost:3030/users/logout")
            setUser(null)
        } catch (e) {
            console.log(e)
        }
    };


    const getUser = async () => {
        try {
            const res = await axios.get("http://localhost:3030/users", { withCredentials: true })
            setUser(res.data.u)
        } catch (e) {
            setUser(null)
        }
    };
    return { user, signup, login, setUser, getUser, logout, currentPage, setCurrentPage };
};

export default useAuth;