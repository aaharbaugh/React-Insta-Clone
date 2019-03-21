import React, { Component } from 'react';

import './Login.css'

class LoginPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
        }
    }

    login = () => {
        localStorage.setItem('username', JSON.stringify(this.state.username));
    }

    inputChangeHandler = event => {
        this.setState({ username: event.target.value });
    };

    render(){
        return(
            <div className="Login-Container">
                <form className="Login-Form">
                    Username: <input onChange={this.inputChangeHandler} type="text" name="username" value={this.state.username}/>
                    Password: <input type="text" name="password" /><br />
                    <button onClick={this.login}>Submit</button>
                </form>
            
            </div>
        )
    }
}

export default LoginPage;