import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Glavn from './glavn';

const MenuContainer = styled.div`
  width: 100%;
  background: white;
  text-align: center;
  padding: 0px 0px;
  box-sizing: border-box; 
`;

const Title = styled.div`
  color: black;
  font-size: 54px;
  font-family: 'Playfair Display', serif;
  margin: 30px auto; 

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px; 

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
  }
`;

const MenuItem = styled.div`
  border-bottom: 1px solid #ccc; 
  padding: 15px;
  text-align: left;
`;

const ItemTitle = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 27px;
  color: black;
  margin-bottom: 5px;
`;

const ItemDescription = styled.div`
  font-size: 15px;
  color: #6E6E6E;
  margin-bottom: 10px;
`;

const ItemPrice = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 27px;
  color: black;
  text-align: right;
`;

const CallToAction = styled.div`
  width: 100%;
  margin-top: 2%;
  clear: both;
  text-align: left;
  background: #E17396;
  padding: 20px; 
  box-sizing: border-box;

  @media (max-width: 768px) {
    text-align: center; 
  }
`;

const CallToActionTitle = styled.div`
  font-size: 42px;
  color: white;
  font-family: 'Playfair Display', serif;
  margin-bottom: 20px; 

  @media (max-width: 768px) {
    font-size: 28px; 
  }
`;

const StyledButton = styled(Button)`
  color: #C93F4E;
  font-size: 24px;
  width: 20%; 
  font-family: 'Playfair Display', serif;
  background-color: rgba(255, 255, 255, 0.63);
  border-radius: 29px;
  margin-bottom: 20px; 
  color: ${({ variant }) => variant === 'white' ? '#C93F4E' : 'black'} !important; // Меняем цвет текста

  @media (max-width: 768px) {
    width: 100%; 
  }
`;




const Menu1 = () => {
  return (
    <>
    <MenuContainer>
        <Glavn/>
      <Title>Некоторые из наших популярных блюд и напитков</Title>

      <MenuGrid>
        {/* Кофе */}
        <MenuItem>
          <ItemTitle>Раф-кофе</ItemTitle>
          <ItemDescription>Латте с лавандой</ItemDescription>
          <ItemPrice>100.00</ItemPrice>
        </MenuItem>

        <MenuItem>
          <ItemTitle>Фундуковое блаженство</ItemTitle>
          <ItemDescription>Мокко со вкусом фундука.</ItemDescription>
          <ItemPrice>130.00</ItemPrice>
        </MenuItem>

        <MenuItem>
          <ItemTitle>Ирландский крем</ItemTitle>
          <ItemDescription>Кофейный коктейль со вкусом ирландских сливок.</ItemDescription>
          <ItemPrice>150.00</ItemPrice>
        </MenuItem>

        {/* Десерты */}
        <MenuItem>
          <ItemTitle>Макарон</ItemTitle>
          <ItemDescription>Кусочек рая с нашим особенным кремом.</ItemDescription>
          <ItemPrice>80.00</ItemPrice>
        </MenuItem>

        <MenuItem>
          <ItemTitle>Лимонный чизкейк</ItemTitle>
          <ItemDescription>Легкий чизкейк с лимонной цедрой и сливочным сыром, покрытый лимонной глазурью.</ItemDescription>
          <ItemPrice>200.00</ItemPrice>
        </MenuItem>

        <MenuItem>
          <ItemTitle>Красный бархат</ItemTitle>
          <ItemDescription> Нежный кусочек рая, искусно украшенный нашим особым кремом.</ItemDescription>
          <ItemPrice> 350.00 </ItemPrice>
        </MenuItem>

        {/* Продолжайте добавлять остальные элементы меню ... */}
      </MenuGrid>
    </MenuContainer>
    
    <CallToAction>
        <CallToActionTitle>Откройте для себя разнообразие кофе и десертов</CallToActionTitle>
        <Link to="/Menu">
          <StyledButton variant="white">Изучите полное меню</StyledButton>
        </Link>
      </CallToAction>
      </>
);
};

export default Menu1;
                          