import {Component} from 'react'

import Cookies from 'js-cookie'

import Restaurant from '../Restaurant'

import './index.css'

const limit = 9
let activePage = 1
let sortby = 'LOWESt'

class RestaurantsList extends Component {
  state = {
    restaurantsList: [],
    showRestaurants: false,
  }

  componentDidMount() {
    this.renderRestaurants()
  }

  renderRestaurants = async () => {
    console.log(`sortby ${sortby}`)
    const offset = (activePage - 1) * limit
    const apiUrl = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=${sortby}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    this.setState({restaurantsList: data.restaurants, showRestaurants: true})
  }

  onDecrease = () => {
    if (activePage > 1) {
      activePage -= 1
    }
    this.renderRestaurants()
  }

  onIncrease = () => {
    if (activePage < 20) {
      activePage += 1
    }
    this.renderRestaurants()
  }

  onChangeSort = event => {
    sortby = event.target.value
    this.renderRestaurants()
  }

  renderSortSelection = () => (
    <select
      className="restaurants-sort-dropdown-selection"
      onChange={this.onChangeSort}
    >
      <option value="LOWEST">LOWEST</option>
      <option value="HIGHEST">HIGHEST</option>
    </select>
  )

  render() {
    const {showRestaurants, restaurantsList} = this.state
    return (
      <>
        <div>
          <h1 className="popular-restaurants-heading">Popular Restaurants</h1>
          <div className="selection-description-container">
            <p className="popular-restaurants-description">
              Select Your favourite restaurent special dish and make your day
              happy...
            </p>
            <div className="sort-container">
              <img
                className="sort-image"
                src="https://res.cloudinary.com/db4grxgst/image/upload/v1625913989/sort_fefdp2.png"
                alt="sort"
              />
              {this.renderSortSelection()}
            </div>
          </div>
          <hr />
        </div>
        <div className="restaurant-list">
          {showRestaurants === true
            ? restaurantsList.map(each => (
                <Restaurant restaurant={each} id={each.id} />
              ))
            : console.log(false)}
        </div>
        <div className="pagination-container">
          <button
            className="pagination-button"
            type="button"
            onClick={this.onDecrease}
          >
            b1
          </button>
          <p>{activePage} of 20</p>
          <button
            className="pagination-button"
            type="button"
            onClick={this.onIncrease}
          >
            b2
          </button>
        </div>
      </>
    )
  }
}

export default RestaurantsList
