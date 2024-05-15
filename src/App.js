import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Table from './Pages/Table';
import Header from './Components/Header';
import Glavn2 from './Pages/Glavn2';
import AuthRootComponent from './Components/auth/AuthRootComponent';

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            orders:[],
            desserts:[
                {
                    id: 1,
                    title:'Макароны (9 шт)', 
                    img:'Макароны.png',
                    price: '800'
                },
                {
                    id: 2,
                    title:'Лимонный чизкейк', 
                    img:'чизкейк.png',
                    price: '200'
                },
                {
                    id: 3,
                    title:'Красный бархат', 
                    img:'бархат.png',
                    price: '180'
                },
                {
                    id: 4,
                    title:'Тирамису', 
                    img:'Тирамису.png',
                    price: '300'
                },
                {
                    id: 5,
                    title:'Штрудель', 
                    img:'Штрудель.png',
                    price: '210'
                },
                {
                    id: 6,
                    title:'Брауни', 
                    img:'Брауни.png',
                    price: '350'
                },
            ],
            coffees:[
                {
                    id: 1,
                    title:'Капучино', 
                    img:'Капучино.png',
                    price: '250'
                },
                {
                    id: 2,
                    title:'Лавандовый Раф', 
                    img:'Раф.png',
                    price: '290'
                },
                {
                    id: 3,
                    title:'Латте', 
                    img:'Латте.png',
                    price: '260'
                },
                {
                    id: 4,
                    title:'Американо', 
                    img:'Американо.png',
                    price: '190'
                },
                {
                    id: 5,
                    title:'Экспрессо', 
                    img:'Экспрессо.png',
                    price: '180'
                },
                {
                    id: 6,
                    title:'Мокачино', 
                    img:'Мокачино.png',
                    price: '240'
                },
            ],
            username: '',
            password: '',
            message: '',
        }
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleRegister = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
          }),
        });
        const data = await response.json();
        this.setState({ message: data.message });
      } catch (error) {
        console.error(error);
        this.setState({ message: 'Ошибка регистрации' });
      }
    };
    
    render(){
        return(
            <div>
            <Header orders={this.state.orders} onDelete={this.deleteOrder} />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Glavn2 />} />
                <Route path="/Table" element={<Table />} />
                <Route path="/Menu" element={<Menu items={this} />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Login" element={<AuthRootComponent />} />
                <Route path="/Register" element={<AuthRootComponent />} />
              </Routes>
              <Footer/>
            </BrowserRouter>
          </div>
        );
    }

    deleteOrder(id) {
        this.setState({
            orders: this.state.orders.filter(el => el.id !== id)
        });
    }

    addToOrder(item){
        let isInArray = false
        this.state.orders.forEach(el => {
           if(el.id === item.id) 
            isInArray = true
        })
        if(!isInArray)

        this.setState({orders: [...this.state.orders, item] } );
    }
}

export default App;