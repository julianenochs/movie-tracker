import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = { 
            email: '',
            password: '' 
        }
    }

    handleSubmit = () => {

    }

    handleChange = () => {

    }

    render() {
        return(
            <section>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.email}
                        placeholder='Your email here'
                        onChange={this.handleChange} />
                    <input 
                        value={this.state.password}
                        placeholder='Password'
                        onChange={this.handleChange} />
                        <button>Login</button>
                </form>
            </section>
        )
    }
}

export default LoginForm;