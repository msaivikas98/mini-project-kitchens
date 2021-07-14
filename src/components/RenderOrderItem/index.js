import {Component} from 'react'

import './index.css'

class RenderOrderItem extends Component {
  state = {
    totalQuantity: 0,
    delQuantity: false,
  }

  componentDidMount() {
    const {orderItem} = this.props
    const {quantity} = orderItem

    this.setState({totalQuantity: quantity, delQuantity: true})
  }

  quantityIncrease = () => {
    this.setState(prevState => ({
      totalQuantity: prevState.totalQuantity + 1,
    }))
  }

  quantityDecrease = () => {
    this.setState(prevState => ({
      totalQuantity: prevState.totalQuantity - 1,
    }))
  }

  findCostPerItem = () => {
    const {orderItem, checkingFunctionPassing} = this.props
    const {name, cost} = orderItem
    const {totalQuantity} = this.state
    checkingFunctionPassing(name, totalQuantity, cost)
  }

  render() {
    const {totalQuantity, delQuantity} = this.state
    const {orderItem, checkOrdersInRenderOrder} = this.props
    const {id, name, imageUrl, cost} = orderItem
    this.findCostPerItem()
    const orderList = JSON.parse(localStorage.getItem('orderList'))
    orderList[id] = {id, name, imageUrl, cost, quantity: totalQuantity}
    localStorage.setItem('orderList', JSON.stringify(orderList))

    if (totalQuantity === 0 && delQuantity) {
      delete orderList[id]
      localStorage.setItem('orderList', JSON.stringify(orderList))
      checkOrdersInRenderOrder(orderList)
      return null
    }

    return (
      <div className="order-item-container">
        <div className="order-item-img-container">
          <img className="order-item-image" src={imageUrl} alt="food" />
          <h1 className="order-item-name">{name}</h1>
        </div>
        <div className="order-item-buttons-container">
          <button
            className="order-item-button"
            onClick={this.quantityDecrease}
            type="button"
          >
            -
          </button>
          <p className="order-item-quantity">{totalQuantity}</p>
          <button
            className="order-item-button"
            onClick={this.quantityIncrease}
            type="button"
          >
            +
          </button>
        </div>
        <p className="order-item-price">₹{cost * totalQuantity}</p>
      </div>
    )
  }
}

export default RenderOrderItem
