import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const RefreshHandle = ({ setAuthenticated }) => {
    const location = useLocation();
    const Navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('Token')) {
            setAuthenticated(true);
            if (location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/login') {
                Navigate('/admin/dashboard', { replace: false });
            };
        }
    }, [location, Navigate, setAuthenticated])

    return (
        null
    )
}

export default RefreshHandle