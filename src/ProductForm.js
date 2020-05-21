import React from 'react';

export default class ProductForm extends React.Component{
    submit(e){
        e.preventDefault();
        console.log(this.refs.name.value +"-$"+this.refs.price.value);
        var product = {
            name:this.refs.name.value,
            price:parseInt(this.refs.price.value)
        }
        this.props.handleCreate(product);
        this.refs.name.value="";
        this.refs.price.value="";
    }
    render(){
        return(
            <div>
            <form onSubmit={(e)=>this.submit(e)}>
            <input type="textbox" placeholder="Product Name" ref="name"/> - $
            <input type="textbox" placeholder="Product Price" ref="price"/>
            <br/>
            <br/>
            <button>Create Product</button>
            </form>
            <hr/>
            </div>
        );
    }
}