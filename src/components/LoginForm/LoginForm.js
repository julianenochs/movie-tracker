import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/index';
import { updateUserInfo } from '../../actions/index';
import { Link } from 'react-router-dom';
import './LoginForm.scss'

class LoginForm extends Component {

  handleChange = (e) => {
    const { updateUserInfo, tempUser } = this.props;
    const inputName = e.target.name;

    switch(inputName) {
      case 'email' :
        updateUserInfo(tempUser.name, e.target.value, tempUser.password);
        break;
      case 'password' :
        updateUserInfo(tempUser.name, tempUser.email, e.target.value);
        break;
      default :
        updateUserInfo(tempUser.name, tempUser.email, tempUser.password);
        break;
    }
  }

  handleLogin = (e) => {
    const { email, password } = this.props.tempUser;
    this.setState({ loggedIn: true });
    this.props.login(email, password);
    this.props.updateUserInfo('','','');
  }

  render() {    
    return(
      <section className='form'>
        <form>
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
            <button onClick={this.handleLogin} >
              Login
            </button>
          </Link>
        </form>
      </section>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch( login(email, password) ),
  updateUserInfo: (name, email, password) => dispatch( updateUserInfo(name, email, password) ),
});

export const mapStateToProps = state => ({
  user: state.user,
  tempUser: state.tempUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);