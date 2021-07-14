import {Component} from 'react'

import './index.css'

class FoodItem extends Component {
  state = {
    showOrderQuantity: false,
    quantity: 0,
  }

  onClickAddButton = () => {
    this.setState({showOrderQuantity: true, quantity: 1})
  }

  increaseOrderQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  decreaseOrderQuantity = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    } else if (quantity === 1) {
      this.setState({showOrderQuantity: false, quantity: 0})
    }
  }

  renderOrderQuantity = () => {
    const {quantity} = this.state
    return (
      <div className="change-quantity-container">
        <button
          className="change-quantity-button"
          onClick={this.decreaseOrderQuantity}
          type="button"
        >
          -
        </button>
        <p className="quantity">{quantity}</p>
        <button
          className="change-quantity-button"
          onClick={this.increaseOrderQuantity}
          type="button"
        >
          +
        </button>
      </div>
    )
  }

  updateLocalStorage = () => {
    let orderList = JSON.parse(localStorage.getItem('orderList'))
    if (orderList === null) {
      orderList = {}
    }
    const {quantity} = this.state
    const {foodItem} = this.props
    const {id, name, imageUrl, cost} = foodItem
    if (quantity === 0) {
      delete orderList[id]
    } else {
      orderList[id] = {id, name, imageUrl, cost, quantity}
    }
    localStorage.setItem('orderList', JSON.stringify(orderList))
  }

  render() {
    const {showOrderQuantity} = this.state
    const {foodItem} = this.props
    const {name, imageUrl, rating, cost} = foodItem
    this.updateLocalStorage()
    return (
      <div className="food-item">
        <img className="food-item-image" src={imageUrl} alt="food-item" />
        <div className="food-item-text-container">
          <h1 className="food-item-name">{name}</h1>
          <p className="food-item-price">₹ {cost}.00</p>
          <p className="food-item-rating">
            <img
              className="rating-icon"
              src="https://res.cloudinary.com/db4grxgst/image/upload/v1625971637/7_Rating_shnfx5.png"
              alt="rating"
            />
            {` ${rating}`}
          </p>

          {showOrderQuantity === true ? (
            this.renderOrderQuantity()
          ) : (
            <button
              className="add-button"
              onClick={this.onClickAddButton}
              type="button"
            >
              ADD
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default FoodItem
