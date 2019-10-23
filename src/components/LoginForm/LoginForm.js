import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/index';

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

    handleLogin = (e) => {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
    }

    render() {  
    console.log(this.props);      
        return(
            <section>
                <form>
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
                        <button onClick={ e => this.handleLogin(e) } >Login</button>
                </form>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch( login(email, password) ),
});

export default connect(null, mapDispatchToProps)(LoginForm);