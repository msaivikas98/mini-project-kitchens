import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

import Header from '../Header'
import Footer from '../Footer'

import RenderOrders from '../RenderOrder'

class Cart extends Component {
  state = {
    showOrders: false,
  }

  componentDidMount() {
    let orderList = JSON.parse(localStorage.getItem('orderList'))
    if (orderList === null) {
      const emptyOrderList = {}
      localStorage.setItem('orderList', JSON.stringify(emptyOrderList))
    }
    orderList = JSON.parse(localStorage.getItem('orderList'))
    console.log(orderList)
    const keysList = Object.keys(orderList)
    if (keysList.length === 0) {
      this.setState({showOrders: false})
    } else {
      this.setState({showOrders: true})
    }
  }

  renderNoOrders = () => (
    <div className="no-orders-container">
      <img
        className="no-orders-image"
        src="https://res.cloudinary.com/db4grxgst/image/upload/v1626088835/no-orders_pvmnct.png"
        alt="no-orders"
      />
      <h1 className="no-orders-heading">No Orders Yet</h1>
      <p className="no-orders-description">
        Your cart is empty. Add something from the menu.
      </p>
      <Link to="/">
        <button className="order-now-button" type="button">
          Order Now
        </button>
      </Link>
    </div>
  )

  checkOrders = orderList => {
    const objectKeys = Object.keys(orderList)
    console.log(objectKeys.length)
    if (objectKeys.length === 0) {
      this.setState({showOrders: false})
      console.log('if triggered')
    } else {
      this.setState({showOrders: true})
      console.log('else triggered')
    }
  }

  onClickGoToPaymentRoute = () => {
    const {history} = this.props
    history.replace('/payment')
  }

  render() {
    const {showOrders} = this.state
    console.log(`show orders in ${showOrders}`)
    return (
      <>
        <div className="cart-bg-container">
          <Header />
          {showOrders === false ? (
            this.renderNoOrders()
          ) : (
            <>
              <RenderOrders checkOrders={this.checkOrders} />
              <button
                className="paynow-button"
                type="button"
                onClick={this.onClickGoToPaymentRoute}
              >
                paynow
              </button>
            </>
          )}
        </div>
        <Footer />
      </>
    )
  }
}

export default Cart
