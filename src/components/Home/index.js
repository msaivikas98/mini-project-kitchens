import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Loader from 'react-loader-spinner'

import Header from '../Header'
import ReactSlider from '../ReactSlick'

import Footer from '../Footer'

import RestaurantsList from '../RestaurantsList'

class Home extends Component {
  state = {
    carouselsList: [],
    showCarousels: false,
    sortby: 'ASC',
    isLoading: true,
  }

  componentDidMount() {
    this.getCarousels()
    this.setState({isLoading: false})
  }

  getCarousels = async () => {
    const apiUrl = 'https://apis.ccbp.in/restaurants-list/offers'

    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    this.setState({carouselsList: data.offers, showCarousels: true})
  }

  render() {
    const {carouselsList, showCarousels, sortby, isLoading} = this.state

    if (isLoading) {
      return <Loader type="Tailspin" color="#00BFFF" height={50} width={50} />
    }

    return (
      <>
        <div className="home-bg-container">
          <Header />
          <div className="carousel-images-container">
            {showCarousels && <ReactSlider carouselsList={carouselsList} />}
          </div>
          <div className="restaurants-list-container">
            <RestaurantsList sortby={sortby} />
          </div>
          <Footer />
        </div>
      </>
    )
  }
}

export default Home
