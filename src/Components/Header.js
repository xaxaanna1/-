import React, { useState } from 'react';
import {
    Button,
    Form,
    Nav,
    Navbar
} from 'react-bootstrap';
import axios from 'axios';
import logo from '../img/Macaroni Fantasy.jpg';
import regis from '../img/reg.png';
import { CiShoppingBasket } from "react-icons/ci";
import Order from './Order';


const showNothing = () => {
    return (<div className='empty' style={{fontFamily: 'Playfair Display'}}>
        <h5>Товаров нет</h5>
    </div>)
}

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (<div>{props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}₽</p>
    </div>)
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);

    const [showOrderForm, setShowOrderForm] = useState(false);
    
    function updateQuantity(itemId, newQuantity) {
        props.onUpdateOrders(prevOrders => 
            prevOrders.map(item => 
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );
    }

function handleOrderSubmit() {
    // 1. Отправляем данные заказа на сервер (например, через axios)
    axios.post('/api/orders', {
        items: props.orders,
        // ... другие данные заказа
    })
    .then(response => {
        // 2. Очищаем корзину
        props.onUpdateOrders([]);
        // 3. Перенаправляем пользователя на страницу подтверждения
        window.location.href = '/order-confirmation';
    })
    .catch(error => {
        console.error(error);
    });
}


    return (
            <>
                <Navbar collapseOnSelect expand="md" bg="white" variant="white" style={{ margin: '2% 2% 0% 2%',  height: '12%', background: 'white', border: '1px solid #898989', width: "96%" }}>
                    <Navbar.Brand href="/" style={{ marginBottom: '0px', width: '67%' }}>
                        <img
                            src={logo}
                            height="40"
                            width="250"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/Menu">Меню</Nav.Link>
                            <Nav.Link href="/About">О нас</Nav.Link>
                            <Nav.Link href="/Contact">Контакты</Nav.Link>
                            <a href="./Login">
                            <img 
                                className="regis"
                                src={regis}
                                alt="Regis"
                            />
                            </a>
                            <CiShoppingBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop ${cartOpen && 'active'}`}/>
                        
                        </Nav>
                        <Form inline>
                            <Button variant="outline-secondary" href="/Table"  style={{ backgroundColor: '#C17079' }}>Бронирование</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </>
    );
}
