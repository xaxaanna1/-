import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
import { Box } from "@mui/material";
import axios from 'axios'; // добавьте эту строку

import './style.css'

const AuthRootComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation()

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        const user = await axios.post('http://localhost:5000/auth/login', userData)
        console.log(user.data)
    }

    return(
        <div className='root'>
            <form className='form' onSubmit={handleSubmit}>
                <Box
                   display='flex'
                   justifyContent='center'
                   alignItems='center'
                   flexDirection='column'
                   maxWidth={640}
                   margin='auto'
                   padding={5} 
                   borderRadius={5}
                   boxShadow={'5px 5px 10px #D17E98'}
                >
                 {location.pathname === '/Login' ? <LoginPage setEmail={setEmail} setPassword={setPassword}/> : location.pathname === '/Register' ? <RegisterPage /> : null}
                </Box>
            </form>
        </div>
    )
}

export default AuthRootComponent