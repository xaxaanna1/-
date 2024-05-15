import React from 'react'
import {TextField, Button, Typography} from "@mui/material";

const RegisterPage = () => {
  return (
    <>
      <Typography variant="h4" padding={3} fontFamily='Playfair Display' textAlign='center'>Регистрация</Typography>
      <TextField fullWidth={true} margin='normal' label="Имя" variant="standard" placeholder='Введите ваше Имя'/>
      <TextField fullWidth={true} margin='normal' label="E-mail" variant="standard" placeholder='Введите ваш E-mail'/>
      <TextField type='password' fullWidth={true} margin='normal' label="Пароль" variant="standard" placeholder='Введите ваш Пароль'/>
      <TextField type='password' fullWidth={true} margin='normal' label="Подтвердите пароль" variant="standard" placeholder='Повторите ваш пароль'/>
      <Button sx={{fontFamily:'Playfair Display', marginTop: 2, marginBottom: 2, width:'50%'}}variant="contained">Регистрация</Button>
      <Typography variant="body2" sx={{fontFamily:'Playfair Display'}}>У вас есть аккаунта?<span className='incitingText'>Авторизация</span></Typography>
    </>
  )
}

export default RegisterPage