import {Link, withRouter} from 'react-router-dom'

import Cookie from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

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
            onClick={onClickLogout}
          >
            log out
          </button>
        </div>
      </div>
    </nav>
  )
}
export default withRouter(Header)