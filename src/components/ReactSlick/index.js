import {Component} from 'react'

import Slider from 'react-slick'

import './index.css'

class ReactSlider extends Component {
  render() {
    const settings = {
      dots: true,
    }

    const {carouselsList} = this.props

    return (
      <div className="container">
        <Slider {...settings}>
          <img
            className="carousel-image"
            src={carouselsList[0].image_url}
            alt="carousel"
          />
          <img
            className="carousel-image"
            src={carouselsList[1].image_url}
            alt="carousel"
          />
          <img
            className="carousel-image"
            src={carouselsList[2].image_url}
            alt="carousel"
          />
          <img
            className="carousel-image"
            src={carouselsList[3].image_url}
            alt="carousel"
          />
        </Slider>
      </div>
    )
  }
}

export default ReactSlider
