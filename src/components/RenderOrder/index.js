import React, {Component} from 'react'

import './index.css'
import RenderOrderItem from '../RenderOrderItem'

import TotalPrice from '../TotalPrice'

class RenderOrders extends Component {
  constructor(props) {
    super(props)

    this.child = React.createRef()
  }

  checkingFunctionPassing = (name, totalQuantity, cost) => {
    console.log(totalQuantity * cost)
  }

  handleClick = () => {
    // Call the child method foo
    this.child.current.foo()
  }

  checkOrdersInRenderOrder = orderList => {
    const {checkOrders} = this.props
    console.log('triggered')
    checkOrders(orderList)
  }

  renderOrders = () => {
    const orderList = JSON.parse(localStorage.getItem('orderList'))
    const orderListKeys = Object.keys(orderList)

    return (
      <>
        <div className="order-details-container">
          <div className="order-details-header">
            <h1 className="order-heading">Item</h1>
            <h1 className="order-heading">Quantity</h1>
            <h1 className="order-heading">Price</h1>
          </div>
          <div>
            {orderListKeys.map(id => (
              <RenderOrderItem
                orderItem={orderList[id]}
                checkOrdersInRenderOrder={this.checkOrdersInRenderOrder}
                checkingFunctionPassing={this.checkingFunctionPassing}
                key={id}
              />
            ))}
          </div>
          <hr />
          <TotalPrice ref={this.child} />
          {this.checkingFunctionPassing()}
        </div>
      </>
    )
  }

  render() {
    return (
      <>
        {this.renderOrders()}

        <button
          className="calculate-total-button"
          type="button"
          onClick={this.handleClick}
        >
          Calculate Total
        </button>
      </>
    )
  }
}
export default RenderOrders
