import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import FoodItem from '../FoodItem'
import Footer from '../Footer'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

let foodItems = []
let restaurantDetails = {}
class RestaurantDetails extends Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    this.getRestaurantDetails()
  }

  getRequiredDetails = data => {
    foodItems = data.food_items.map(eachItem => ({
      name: eachItem.name,
      imageUrl: eachItem.image_url,
      cost: eachItem.cost,
      id: eachItem.id,
      rating: eachItem.rating,
    }))

    restaurantDetails = {
      name: data.name,
      costForTwo: data.cost_for_two,
      cuisine: data.cuisine,
      restaurantImageUrl: data.image_url,
      location: data.location,
      rating: data.rating,
      reviewsCount: data.reviews_count,
    }

    this.setState({isLoading: false})
  }

  getRestaurantDetails = async () => {
    const {match} = this.props
    const {id} = match.params
    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    this.getRequiredDetails(data)
  }

  renderRestaurantInfo = () => (
    <div className="restaurant-info-bg-container">
      <div className="restaurant-info-container">
        <img
          className="restaurant-image"
          src={restaurantDetails.restaurantImageUrl}
          alt="restaurant"
        />
        <div className="restaurant-info-text-container">
          <h1 className="restaurant-name">{restaurantDetails.name}</h1>
          <p className="restaurant-cuisine">{restaurantDetails.cuisine}</p>
          <p className="restaurant-location">{restaurantDetails.location}</p>
          <div className="ratings-price-container">
            <div className="ratings-container">
              <p className="rating">
                <img
                  className="rating-icon"
                  src="https://res.cloudinary.com/db4grxgst/image/upload/v1625971637/7_Rating_shnfx5.png"
                  alt="rating"
                />
                {restaurantDetails.rating}
              </p>
              <p className="reviews-count">
                {restaurantDetails.reviewsCount} ratings
              </p>
            </div>
            <div className="price-container">
              <p className="cost-price">₹ {restaurantDetails.costForTwo}</p>
              <p className="cost-for-two">Cost for two</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  renderFoodItems = () => (
    <div className="food-items-container">
      {foodItems.map(eachItem => (
        <FoodItem foodItem={eachItem} key={eachItem.id} />
      ))}
    </div>
  )

  renderFoodItem = foodItem => <h1>{foodItem.name}</h1>

  renderRestaurantDetails = () => (
    <>
      {this.renderRestaurantInfo()}
      {this.renderFoodItems()}
    </>
  )

  renderLoader = () => (
    <Loader type="Tailspin" color="#00BFFF" height={50} width={50} />
  )

  render() {
    const {isLoading} = this.state
    return (
      <>
        <Header />
        <div className="restaurant-details-bg-container">
          {isLoading === true
            ? this.renderLoader()
            : this.renderRestaurantDetails()}
        </div>
        <Footer />
      </>
    )
  }
}
export default RestaurantDetails
