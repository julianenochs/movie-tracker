import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as EmailValidator from 'email-validator';
import { 
  updateUserInfo, 
  updateUser, 
  updateError, 
  updateIsLoggedIn, 
  resetError } from '../../actions/index';
import { register } from '../../apiCalls';
import './RegisterForm.scss';
import Bounce from 'react-reveal/Bounce'
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
    const isValidEmail = EmailValidator.validate(email);
    register(name, email, password)
    .then(data => {
      if( isValidEmail ) {
        this.props.updateIsLoggedIn(true);
        this.props.updateUser(email, data.id);
        this.props.resetError();
      } else {
        this.props.updateError({message: 'Please enter a valid email' });
      }
      
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
    const { name, email, password } = this.props.tempUser;
    const isFormComplete = name !== '' && email !== '' && password !== '';
    return (
      <Bounce>
      <form className='register__form'>
        {this.props.error !== '' && <h4 className='error__email'>{this.props.error}</h4>}
        {this.props.isLoggedIn && this.handleRedirect()}
        <input
          name='name'
          type='text'
          value={this.props.tempUser.name}
          placeholder='Enter Name'
          onChange={this.handleChange}
          className='register__input'
        />
        <input
          name='email'
          type='text'
          value={this.props.tempUser.email}
          placeholder='Your email here'
          onChange={this.handleChange}
          className='register__input'
        />
        <input
          name='password'
          type='password'
          value={this.props.tempUser.password}
          placeholder='Password'
          onChange={this.handleChange}
          className='register__input'
        />
          {isFormComplete && <button onClick={this.handleRegister} className='register__button'>Register</button>}
          {!isFormComplete && <button disabled className='register__button'>Register</button>}
      </form>
      </Bounce>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateUserInfo: (name, email, password) =>
    dispatch(updateUserInfo(name, email, password)),
  updateUser: (email, id) => dispatch( updateUser(email, id) ),
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
