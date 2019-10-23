import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/index';
import { register } from '../../actions/index';
import { NavLink, Redirect, Link } from 'react-router-dom';
import './LoginForm.scss'

class LoginForm extends Component {
    constructor() {
        super();
        this.state = { 
            email: '',
            password: '',
            name: '',
            loggedIn: false
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
        this.setState({ loggedIn: true });
        console.log(this.state);
        this.props.login(this.state.email, this.state.password);
    }

    handleRegister = e => {
        e.preventDefault();
        this.props.register(this.state.name, this.state.email, this.state.password);
    }

    render() {    
        return(
            <section className='form'>
                <form>
                    <input 
                        name='name'
                        value={this.state.name}
                        placeholder='Enter Name'
                        onChange={this.handleChange} />
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
                        <Link to='/'>
                            <button onClick={ e => this.handleLogin(e) } >Login</button>
                        </Link>
                        <button onClick={ e => this.handleRegister(e)} > Register </button>
                </form>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch( login(email, password) ),
    register: (name, email, password) => dispatch( register(name, email, password) ),
});

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(null, mapDispatchToProps)(LoginForm);