import React, { Component } from 'react';
import styled from "styled-components";


const LoginContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    width: 200px;
`;

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
            <LoginContainer>

                <LoginForm>
                    Username: <input onChange={this.inputChangeHandler} type="text" name="username" value={this.state.username}/>
                    Password: <input type="text" name="password" /><br />
                    <button onClick={this.login}>Submit</button>
                </LoginForm>
            
            </LoginContainer>
        )
    }
}

export default LoginPage;