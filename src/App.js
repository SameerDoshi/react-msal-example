import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import * as Msal from "msal";

class App extends Component {
 constructor(props){
   super(props);
   let msalConfig = {
    auth: {
      clientId: '{replace with client id}', //ex: 9a0eea96-3570-4e21-bafd-0b54347d4768
      authority: "https://login.microsoftonline.com/{tenant}", //ex:cbd7b8d7-05d1-4d8b-a7dd-a24b6682a20a
    }
  };
  let msalI = new Msal.UserAgentApplication(msalConfig);
  this.state = {
    msalInstance: msalI,
    username: "",
    email: "",
    userid: "",
    loggedin: false
  };
 }
 
 componentDidMount() {

  if (this.state.msalInstance.getAccount()) {

    let id = this.state.msalInstance.getAccount();
    this.setState({
      loggedin: true,
      email: id.userName,
      username: id.name
    });

  } else {
    let loginRequest = {
      scopes: ["user.read"]
    };
    this.state.msalInstance.loginRedirect(loginRequest)
      .then(response => {

      })
      .catch(err => {
        // handle error
      });
  }
}

 
  render= ()=>{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.state.loggedin?
        <h1>You are logged in! {this.state.username}</h1>
        :
        
        <h1>You are not logged in</h1>
        }
      </header>
    </div>
  );
  }
}

export default App;
