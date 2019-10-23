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
        this.setState({ email: '', password: ''})
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    render() {
        return(
            <section>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name='email'
                        value={this.state.email}
                        placeholder='Your email here'
                        onChange={this.handleChange} />
                    <input 
                        name='password'
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