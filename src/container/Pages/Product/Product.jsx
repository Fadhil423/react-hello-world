// Libraries
import React, {Component, Fragment} from 'react';

// Pages
import CardProduct from './CardProduct/CardProduct';

// Style
import './Product.css';


// Class Component Product
class Product extends Component{
    state = {
        order : 0,
        name : 'Fadhil'
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }
    handlePlus = () =>{
        this.setState({
            order: this.state.order + 1
        })
    }

    handleMinus = () =>{
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            })
        }
    }

    render(){
        return(
            <Fragment>
                <p>Halaman Product</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="https://lelogama.go-jek.com/post_thumbnail/fitur-review-makanan.jpg" width="200" height="100" alt="Logo"/>
                    </div>
                    <div className="trolley">
                        <img src="https://static.thenounproject.com/png/1138099-200.png" width="30" height="30" alt="trolleyicon"/>
                        <div className="Count">{this.state.order}</div>
                    </div>
                </div>
                
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        );
    }
}

export default Product;