import React, { Component } from 'react';

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
                <form>
                    <input onChange={this.inputChangeHandler} type="text" name="username" value={this.state.username}/>
                    <input type="text" name="password" />
                    <button onClick={this.login}>Submit</button>
                </form>
            
            </div>
        )
    }
}

export default LoginPage;