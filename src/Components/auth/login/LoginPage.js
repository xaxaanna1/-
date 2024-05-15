import React, { Fragment } from 'react';
import { TextField, Button, Typography } from '@mui/material';

interface LoginPageProps {
  setPassword: (password: string) => void;
  setEmail: (email: string) => void;
}

const LoginPage = (props: LoginPageProps) => {
  const { setPassword, setEmail } = props;

  return (
    <Fragment>
      <Typography variant="h4" padding={3} fontFamily='Playfair Display' textAlign='center'>Форма входа</Typography>
      <TextField fullWidth margin='normal' label="E-mail" variant="standard" placeholder='Введите ваш E-mail' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
      <TextField type='password' fullWidth margin='normal' label="Пароль" variant="standard" placeholder='Введите ваш Пароль' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
      <Button type='submit' sx={{ fontFamily: 'Playfair Display', marginTop: 2, marginBottom: 2, width: '30%' }} variant="contained">Войти</Button>
      <Typography variant="body2" sx={{ fontFamily: 'Playfair Display' }}>У вас нет учетной записи?<span className='incitingText'>Зарегистрироваться</span></Typography>
    </Fragment>
  );
};

export default LoginPage;

