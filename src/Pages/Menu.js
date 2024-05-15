import React from 'react';
import Items from '../Components/Items';
import Header from '../Components/Header';
import App from '../App';


class Menu extends React.Component{
   
    render(){
    console.log(this.props.coffees)

        return(
        <div className='wrapper'>
        <div style={{textAlign: 'center', fontSize: '44px', fontFamily: 'Playfair Display'}}>Десерты</div>
        <Items items={this.props.items.state.desserts} onAdd={this.props.items.addToOrder}/> 
        <div style={{textAlign: 'center', fontSize: '44px', fontFamily: 'Playfair Display'}}>Кофе</div>
        <Items items={this.props.items.state.coffees} onAdd={this.props.items.addToOrder}/>
        </div>
        )
    }

    
}

export default Menu;
