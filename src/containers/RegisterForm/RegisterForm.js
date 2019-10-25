import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { 
  updateUserInfo, 
  updateUser, 
  updateError, 
  updateIsLoggedIn, 
  resetError } from '../../actions/index';
import { register } from '../../apiCalls';
import './RegisterForm.scss';

class RegisterForm extends Component {
  handleChange = e => {
    const { updateUserInfo, tempUser } = this.props;
    const inputName = e.target.name;

    switch (inputName) {
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
  };

  handleRegister = e => {
    e.preventDefault();
    const { name, email, password } = this.props.tempUser;
    register(name, email, password)
    .then(register => {
      this.props.updateIsLoggedIn(true);
      this.props.updateUser(email);
      this.props.resetError();
    })
    .catch(error => {
      this.props.updateError(error);
    })
    this.props.updateUserInfo('', '', '');
  };

  handleRedirect = () => {
    if(this.props.isLoggedIn) {
      return <Redirect to='/' />
    }
  }

  render() {
    return (
      <form className='form'>
        {this.props.error !== '' && <h4>{this.props.error}</h4>}
        {this.props.isLoggedIn && this.handleRedirect()}
        <input
          name='name'
          type='text'
          value={this.props.tempUser.name}
          placeholder='Enter Name'
          onChange={this.handleChange}
        />
        <input
          name='email'
          type='text'
          value={this.props.tempUser.email}
          placeholder='Your email here'
          onChange={this.handleChange}
        />
        <input
          name='password'
          type='password'
          value={this.props.tempUser.password}
          placeholder='Password'
          onChange={this.handleChange}
        />
          <button onClick={this.handleRegister}>Register</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateUserInfo: (name, email, password) =>
    dispatch(updateUserInfo(name, email, password)),
  updateUser: email => dispatch( updateUser(email) ),
  updateIsLoggedIn: bool => dispatch( updateIsLoggedIn(bool) ),
  updateError: error => dispatch( updateError(error) ),
  resetError: () => dispatch( resetError() ),
});

const mapStateToProps = state => ({
  tempUser: state.tempUser,
  error: state.error,
  isLoggedIn: state.isLoggedIn,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);
