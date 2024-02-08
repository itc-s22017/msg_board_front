import React from 'react'
import "./Pagenation.css"
import { useAuthContext } from '../../context/AuthContext';

function Pagination({ MAX, setValue, itemsPerPage }) {
    var list = [];
    const { currentPage } = useAuthContext()

    const handleValue = (v) => {
        setValue(v)
    }

    for (let i = 1; i <= Math.ceil(MAX / itemsPerPage); i++) {
        const isActive = i === currentPage ? 'active' : '';
        list.push(
            <li className={`li ${isActive}`} key={i} onClick={() => handleValue(i)}>{i}</li>
        );
    }
    return (
        <ul className='ul'>
            {list}
        </ul>
    )
}

export default Pagination