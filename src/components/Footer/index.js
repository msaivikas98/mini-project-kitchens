import './index.css'

const Footer = () => (
  <div className="footer-bg-container">
    <h1 className="footer-heading">Tasty Kitchens</h1>
    <p className="footer-description">
      The only thing we are serious about is food.
    </p>
    <div className="footer-images-container">
      <img
        src="https://res.cloudinary.com/db4grxgst/image/upload/v1626146189/pinterest-icon_ne25hh.png"
        className="footer-icon"
        alt="pininterest"
      />
      <img
        src="https://res.cloudinary.com/db4grxgst/image/upload/v1626146189/instagram-icon_dth1qz.png"
        className="footer-icon"
        alt="instagram"
      />
      <img
        src="https://res.cloudinary.com/db4grxgst/image/upload/v1626146189/twitter-icon_niclz6.png"
        className="footer-icon"
        alt="twitter"
      />
      <img
        src="https://res.cloudinary.com/db4grxgst/image/upload/v1626146189/facebook-icon_rsxdpa.png"
        className="footer-icon"
        alt="facebook"
      />
    </div>
  </div>
)
export default Footer
