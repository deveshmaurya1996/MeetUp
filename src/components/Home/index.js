import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'
import Context from '../../context/index'

const Home = () => {
  const updatedLine = () => (
    <Context.Consumer>
      {value => {
        const {inputText, inputTag} = value
        console.log(inputText)
        console.log(inputTag)
        return (
          <>
            {inputText === '' ? (
              <>
                <h1 className="home-heading">Welcome to Meetup</h1>
                <p className="home-info">Please register for the topic</p>
              </>
            ) : (
              <>
                <h1 className="user-heading">Hello {inputText}</h1>
                <p className="user-info">Welcome to {inputTag}</p>
              </>
            )}
            {inputText === '' ? (
              <Link to="/register" className="link">
                <button className="register-button" type="button">
                  Register
                </button>
              </Link>
            ) : (
              ''
            )}
          </>
        )
      }}
    </Context.Consumer>
  )
  return (
    <>
      <Header />
      <div className="home-container">
        {updatedLine()}

        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
          className="home-image"
        />
      </div>
    </>
  )
}

export default Home
