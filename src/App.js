import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/signin/SignIn.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loginScreen:[],
      homeScreen:[]
    }
  }


  componentWillMount(){
    var loginScreen=[];
    loginScreen.push(<SignIn parentContext={this} />);
    this.setState({
      loginScreen:loginScreen
    })
  }

  render(){
    return(
      <div className="App">
        {this.state.loginScreen}
        {this.state.homeScreen}
      </div>
    );
  }
}

export default App;
