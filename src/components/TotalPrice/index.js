import {Component} from 'react'

import './index.css'

class TotalPrice extends Component {
  state = {
    totalPrice: 0,
  }

  foo = () => {
    const orderList = JSON.parse(localStorage.getItem('orderList'))

    const orderListKeys = Object.keys(orderList)

    const totalPriceList = orderListKeys.map(
      eachId => orderList[eachId].quantity * orderList[eachId].cost,
    )

    const sum = totalPriceList.reduce((acc, val) => acc + val, 0)

    this.setState({totalPrice: sum})
  }

  render() {
    const {totalPrice} = this.state

    return (
      <>
        <div className="order-details-footer">
          <h1 className="order-total">order Total: </h1>
          <h1 className="order-total-price">{totalPrice}</h1>
        </div>
      </>
    )
  }
}

export default TotalPrice
