import {Link} from 'react-router-dom'

import './index.css'

const getDetails = restaurant => {
  const restaurantObject = {
    name: restaurant.name,
    imageUrl: restaurant.image_url,
    cuisine: restaurant.cuisine,
    rating: restaurant.user_rating.rating,
    totalReviews: restaurant.user_rating.total_reviews,
  }
  return restaurantObject
}

const Restaurant = props => {
  const {restaurant, id} = props
  const {name, imageUrl, cuisine, rating, totalReviews} = getDetails(restaurant)

  return (
    <Link to={`/restaurant/${id}`} className="restaurant-container link-item">
      <img className="restaurant-image" src={imageUrl} alt="restaurant" />
      <div className="details-container">
        <h1 className="name">{name}</h1>
        <p className="cuisine">{cuisine}</p>
        <div className="restaurant-ratings-container">
          <img
            className="rating-image"
            src="https://res.cloudinary.com/db4grxgst/image/upload/v1625971637/7_Rating_shnfx5.png"
            alt="star"
          />
          <p className="restaurant-rating">
            {rating} ({totalReviews})
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Restaurant
