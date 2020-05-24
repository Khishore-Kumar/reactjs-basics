import React from 'react';
import Product from './Product';
import ProductForm from './ProductForm';
import Total from './Total';

export default class ProductList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            total:0,
            productList:[
                            {name:"Android", price:199},
                            {name:"iPhone", price:399},
                            {name:"Windows", price:159}
                        ]
        };
    }
    createProduct(product){
        console.log(this.state.productList);
        this.setState({productList: this.state.productList.concat(product)});
        console.log(this.state.productList);
    }
    totalPrice(price){
        this.setState({total: this.state.total+price});      
    }
    showSelection(name){
        alert("You have selected "+name);
    }
    render() {
        var component=this;
        var products = this.state.productList.map(function(product) {
            return(
                <Product name={product.name} price={product.price}
                handleShow={(price)=>component.showSelection(price)}
                handleTotal={(name)=>component.totalPrice(name)}/>
            );
        });


        return(
            <div>
            <h2>Khishore's Site</h2>
            <ProductForm handleCreate={(product)=>this.createProduct(product)}/>
            {products}
            <Total total={this.state.total}/>
            </div>
        );
    }
}