import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Typography from '@material-ui/core/Typography';
import RaisedButton from 'material-ui/RaisedButton';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import ProductList from '../product/ProductPage.js';

class Login extends React.Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }

 handleClick(event){
   console.log("email: "+this.state.username);
   console.log("password: "+this.state.password);
   var self = this;
    console.log("ParentContext:"+self.props.parentContext);
    //console.log(e.target.value);
    var pw=this.state.password;
    if(pw==="khish"){
      console.log("Correct PW!");
      var homeScreen=[];
      homeScreen.push(<ProductList parentContext={self} appContext={self.props.parentContext}/>);
      self.props.parentContext.setState({
        loginScreen:[],
        homeScreen:homeScreen
      })
    }
 }

render() {
    return (
      <div class="LoginPage">
        <MuiThemeProvider>
          <div>
            <LockOpenIcon color="error" fontSize="large"/>
            <Typography variant="h3" gutterBottom>
            LOGIN
            </Typography>
            <form noValidate>
              <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange = {(event,newValue) => this.setState({username:newValue})}
              />
              <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              >
              Sign In
              </Button>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
            </form>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;