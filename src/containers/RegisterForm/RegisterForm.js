import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/index';
import { updateUserInfo } from '../../actions/index';
import { Link } from 'react-router-dom';
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
    const { name, email, password } = this.props.tempUser;
    this.props.register(name, email, password);
    this.props.updateUserInfo('', '', '');
  };

  render() {
    return (
      <form className='form'>
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
        <Link to='/'>
          <button onClick={this.handleRegister}>Register</button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateUserInfo: (name, email, password) =>
    dispatch(updateUserInfo(name, email, password)),
  register: (name, email, password) => dispatch(register(name, email, password))
});

const mapStateToProps = state => ({
  tempUser: state.tempUser
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);
