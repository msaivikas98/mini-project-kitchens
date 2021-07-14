import {Component} from 'react'

import './index.css'

class TotalPrice extends Component {
  state = {
    totalPrice: 0,
  }

  changeTotalPrice = price => {
    this.setState(prevState => ({totalPrice: prevState.totalPrice + price}))
  }

  printHelloWorld = () => {
    console.log('hello world')
  }

  render() {
    const totalPrice = localStorage.getItem('totalPrice')
    console.log(totalPrice)
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
