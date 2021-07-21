import {Link, withRouter} from 'react-router-dom'

import Cookie from 'js-cookie'

import './index.css'

import {Component} from 'react'

class Header extends Component {
  state = {
    showMobileMenu: false,
  }

  onClickNav = () => {
    this.setState(prevState => ({showMobileMenu: !prevState.showMobileMenu}))
  }

  onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    let {showMobileMenu} = this.state

    showMobileMenu = showMobileMenu === true ? 'show-mobile-menu' : ''

    return (
      <nav className="navbar-header">
        <div className="nav-content">
          <Link to="/" className="nav-link">
            <div className="logo-name-container">
              <img
                className="website-logo"
                src="https://i.postimg.cc/Bv69dy3P/tasty-kitchesns-logo.jpg"
                alt="wesite-logo"
              />
              <h1 className="website-name">Tasty Kitchens</h1>
            </div>
          </Link>
          <div className="navbar-button-container">
            <button
              onClick={this.onClickNav}
              className="navbar-button"
              type="button"
            >
              <img
                src="https://res.cloudinary.com/db4grxgst/image/upload/v1626420984/Icon_at3vez.png"
                alt="nav"
              />
            </button>
          </div>
          <div className="menu-button-container">
            <ul className="nav-menu">
              <Link to="/" className="nav-link">
                <li>Home</li>
              </Link>
              <Link to="/cart" className="nav-link">
                <li>Cart</li>
              </Link>
            </ul>
            <button
              type="button"
              className="logout-desktop-button"
              onClick={this.onClickLogout}
            >
              log out
            </button>
          </div>
        </div>
        <div className={`mobile-menu-button-container ${showMobileMenu}`}>
          <ul className="mobile-nav-menu">
            <Link to="/" className="nav-link">
              <li>Home</li>
            </Link>
            <Link to="/cart" className="nav-link">
              <li>Cart</li>
            </Link>
          </ul>
          <button
            type="button"
            className="logout-mobile-button"
            onClick={this.onClickLogout}
          >
            log out
          </button>
        </div>
      </nav>
    )
  }
}
export default withRouter(Header)
