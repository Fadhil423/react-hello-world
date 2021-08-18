// Libraries
import { RequestHeaderFieldsTooLarge } from 'http-errors';
import React, {Component} from 'react';

// Url
import Counter from './Counter';

// Class Component CardProduct
class CardProduct extends Component{
    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="http://kbu-cdn.com/dk/wp-content/uploads/ayam-saus-tiram.jpg" alt="Ayam saus tiram"/>
                </div>
                <p className="product-title">Daging Ayam Berbumbu rasa saus tiram [1 carton - 10 pack]</p>
                <p className="product-price">Rp 410,000</p>
                <Counter onCounterChange={(value) => this.props.onCounterChange(value)}/>
            </div>
        );
    }
}

export default CardProduct;