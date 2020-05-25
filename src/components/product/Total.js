import React from 'react';

export default class Total extends React.Component{
    render(){
        return(
            <h3>Total Cash: ${this.props.total}</h3>
        );
    }
}