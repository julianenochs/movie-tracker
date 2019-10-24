import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/index';
import { register } from '../../actions/index';
import { updateUserInfo } from '../../actions/index';
// import { NavLink, Redirect, Link } from 'react-router-dom'

class LoginForm extends Component {

    handleSubmit = () => {
        this.setState({ email: '', password: ''})
    }

    handleChange = (e) => {
        const { updateUserInfo, tempUser } = this.props;
        const inputName = e.target.name;
        switch(inputName) {
            case 'name':
                updateUserInfo(e.target.value, tempUser.email, tempUser.password);
                break;
            case 'email':
                updateUserInfo(tempUser.name, e.target.value, tempUser.password);
                break;
            case 'password':
                updateUserInfo(tempUser.name, tempUser.email, e.target.value);
                break;
            default:
                updateUserInfo(tempUser.name, tempUser.email, tempUser.password);
                break;
        }
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.setState({ loggedIn: true });
        this.props.login(this.state.email, this.state.password);
    }

    handleRegister = e => {
        e.preventDefault();
        this.props.register(this.state.name, this.state.email, this.state.password);
    }

    render() {
        // if(this.state.loggedIn === true) {
        //    return <Redirect exact to='/' />
        // } 
        console.log(this.props);
        return(
            <form>
                <input 
                    name='name'
                    value={this.props.tempUser.name}
                    placeholder='Enter Name'
                    onChange={this.handleChange} />
                <input
                    name='email'
                    value={this.props.tempUser.email}
                    placeholder='Your email here'
                    onChange={this.handleChange} />
                <input 
                    name='password'
                    value={this.props.tempUser.password}
                    placeholder='Password'
                    onChange={this.handleChange} />
                    <button onClick={ e => this.handleLogin(e) } >Login</button>
                    <button onClick={ e => this.handleRegister(e)} > Register </button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch( login(email, password) ),
    register: (name, email, password) => dispatch( register(name, email, password) ),
    updateUserInfo: (name, email, password) => dispatch( updateUserInfo(name, email, password) ),
});

const mapStateToProps = state => ({
    user: state.user,
    tempUser: state.tempUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);