import {Component} from 'react'
import './index.css'

class Paynow extends Component {
  onClickGotoHomePage = () => {
    const {history} = this.props
    history.replace('/')
    const emptyOrderList = {}
    localStorage.setItem('orderList', JSON.stringify(emptyOrderList))
  }

  render() {
    return (
      <div className="paynow-bg-container">
        <div className="paynow-card">
          <img
            className="payment-successful-image"
            src="https://res.cloudinary.com/db4grxgst/image/upload/v1626845566/check-circle.1_1_azl29u.png"
            alt="successful"
          />
          <h1 className="payment-heading">Payment Successful</h1>
          <p className="payment-description">
            Thank you for ordering <br /> Your payment is successfully
            completed.
          </p>
          <button
            className="payment-home-page-button"
            type="button"
            onClick={this.onClickGotoHomePage}
          >
            Go To Home Page
          </button>
        </div>
      </div>
    )
  }
}

export default Paynow
