import React from 'react';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

function Logout() {

    const navigate = useNavigate();

    const logout = async () => {
        try {
            const res = await fetch('/logout', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                credentials: "include"
            });

            if (res.status === 401 || !res) {
                window.alert("PLease logout later");
            }
            else {
                navigate.push('/')
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        logout();

    }, [])


    return (
        <div></div>
    )
}

export default Logout