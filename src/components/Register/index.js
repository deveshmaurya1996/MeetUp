import {Component} from 'react'
import Header from '../Header'
import Context from '../../context/index'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Home extends Component {
  state = {
    inputText: '',
    inputTag: topicsList[0].id,
    errorMsg: false,
  }

  submitForm = event => {
    event.preventDefault()
  }

  changeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onChangeTag = event => {
    this.setState({inputTag: event.target.value})
  }

  onClickRegister = () => {
    const {inputText} = this.state
    const {history} = this.props
    return inputText === ''
      ? this.setState(prevState => ({errorMsg: !prevState.errorMsg}))
      : history.replace('/')
  }

  renderUserWelcome = () => {
    const {inputText, inputTag} = this.state
    return (
      <>
        <Header />
        <h1 className="user-heading">Hello {inputText}</h1>
        <p className="user-info">Welcome to {inputTag}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
          className="home-image"
        />
      </>
    )
  }

  renderRegistrationPage = () => {
    const {inputText, inputTag, errorMsg} = this.state
    console.log(inputTag, inputText)
    return (
      <>
        <Header />
        <div className="registration-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="register-image"
            />
          </div>
          <Context.Provider value={{inputText, inputTag}}>
            <form onSubmit={this.submitForm}>
              <div className="name-input-container">
                <h1 className="title">Let us join</h1>
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={this.changeInput}
                  value={inputText}
                  id="name"
                  className="input"
                />
              </div>
              <div className="tag-input-container">
                <label htmlFor="topics" className="label">
                  Topics
                </label>
                <select
                  onChange={this.onChangeTag}
                  value={inputTag}
                  id="topics"
                  className="select"
                >
                  {topicsList.map(each => (
                    <option value={each.id} key={each.id} className="option">
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="register-button"
                onClick={this.onClickRegister}
              >
                Register Now
              </button>

              {errorMsg ? (
                <p className="error-msg">Please enter your name</p>
              ) : (
                ''
              )}
            </form>
          </Context.Provider>
        </div>
      </>
    )
  }

  render() {
    return <>{this.renderRegistrationPage()}</>
  }
}

export default Home
