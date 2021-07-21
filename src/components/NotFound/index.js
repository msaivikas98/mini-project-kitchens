import './index.css'

import Header from '../Header'

const NotFound = props => {
  const onClickHomePage = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <>
      <div className="not-found-container">
        <Header />
        <img
          className="not-found-image"
          src="https://res.cloudinary.com/db4grxgst/image/upload/v1625884954/erroring_1_l2o88j.png"
          alt=""
        />
        <h1 className="not-found-heading">PAGE NOT FOUND</h1>
        <p className="not-found-description">
          we’re sorry, the page you requested could not be found Please go back
          to the homepage
        </p>
        <button
          className="home-page-button"
          onClick={onClickHomePage}
          type="button"
        >
          Home Page
        </button>
      </div>
    </>
  )
}

export default NotFound
