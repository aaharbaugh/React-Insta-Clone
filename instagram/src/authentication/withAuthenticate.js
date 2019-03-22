import React, { Component } from 'react';

const withAuthenticate = HOCComponent => HOCComponent2 => {
    return class extends Component {
        constructor(props){
            super(props)

            this.state = {
                username: '',
                loggedIn: false
            }
        }

        componentDidMount(){
            const username = JSON.parse(localStorage.getItem('username'))

            if (username) {
                this.setState(prevState => {
                    return {
                     username: username,
                     loggedIn: !prevState.loggedIn
                    }
                  })
              }
        }

        logout = () => {
            this.setState(prevState => {
                return { 
                    username: '',
                    loggedIn: false
                    }
                })
        }
   
        render(){
            return (
              <>
              {this.state.loggedIn
              ? <HOCComponent username={this.state.username} logoutFunction={this.logout}/>
              : <HOCComponent2 />    
              }
                
              </>  
            )
        }
    }
    
}

export default withAuthenticate;