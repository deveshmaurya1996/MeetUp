import './index.css'

const NotFound = () => (
  <>
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="heading">Page Not found</h1>
      <p className="description">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
