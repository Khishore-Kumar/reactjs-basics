import React from 'react';

export default class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {qty:0};
    }
    show(){
        {this.props.handleShow(this.props.name)};
    }
    buy() {
        this.setState({qty:this.state.qty+1});
        this.props.handleTotal(this.props.price);
    }
    render(){
        return(
            <div>
                <p>{this.props.name} - ${this.props.price}</p>
                <button onClick={()=>this.buy()}>Add</button>
                <button onClick={()=>this.show()}>Show</button>
                <h3>Qty: {this.state.qty} item(s)</h3>
                <hr/>
            </div>
        );
    }
}