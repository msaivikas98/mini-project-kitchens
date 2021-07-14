import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})

    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsername = () => {
    const {username} = this.state

    return (
      <>
        <label className="form-label" htmlFor="formUsernameInput">
          USERNAME
        </label>
        <input
          className="form-input"
          placeholder="lucifier"
          id="formUsernameInput"
          type="text"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <label className="form-label" htmlFor="formPasswordInput">
          PASSWORD
        </label>
        <input
          className="form-input"
          onChange={this.onChangePassword}
          id="fromPasswordInput"
          type="password"
          value={password}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-form-container">
        <div className="form-container">
          <form className="form-card" onSubmit={this.onSubmitForm}>
            <img
              className="tasty-kitchens-logo"
              src="https://i.postimg.cc/Bv69dy3P/tasty-kitchesns-logo.jpg"
              alt="tasty-kitchens-logo"
            />
            <h1 className="tasty-kitchens-heading">Tasty Kitchens</h1>
            <h1 className="text-sign-in">Sign in</h1>
            <div className="form-input-container">{this.renderUsername()}</div>
            <div className="form-input-container">{this.renderPassword()}</div>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
            <button type="submit" className="form-sign-in-button">
              SIgn in
            </button>
          </form>
        </div>
        <img
          src="https://i.postimg.cc/9FnQvLZT/login-bg-image.jpg"
          className="form-image"
          alt="background"
        />
      </div>
    )
  }
}

export default LoginForm
