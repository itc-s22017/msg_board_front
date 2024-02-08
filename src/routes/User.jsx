import React from 'react'
import { useParams } from 'react-router-dom'
import Timeline from '../components/Timeline/Timeline'
import { useAuthContext } from '../context/AuthContext'

const User = () => {
    const { currentPage } = useAuthContext()
    const { id } = useParams();


    return (
        <>
            <Timeline userScreen={{ id, page: currentPage }} />
        </>
    )
}

export default User