import {Component} from 'react'
import './index.css'
class ActiveEventRegistrationDetails extends Component {
  renderNoActiveEventView = () => {
    return (
      <div>
        <p className="initial-description">
          Click on an event, to view its registration details.{' '}
        </p>
      </div>
    )
  }

  renderRegistrationsClosedView = () => {
    return (
      <div className="registrations-closed-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
          alt="registrations closed"
          className="registrations-closed-img"
        />
        <h1 className="registrations-closed-heading">
          Registrations Are Closed Now!
        </h1>
        <p className="registrations-closed-description">
          Stay tuned. we will reopen the registrations soon!
        </p>
      </div>
    )
  }

  renderYetToRegisterView = () => {

    return (
      <div className="registrations-closed-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="registrations-closed-img"
        />
        <p className="registrations-closed-description">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often can make you fall totally in llove with
          this beautiful art form.
        </p>
        <button className="register-btn">Register Here</button>
      </div>
    )
  }

  renderRegisteredView = () => {
    return (
      <div className="registrations-closed-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="registrations-closed-img"
        />
        <h1 className="registrations-closed-description">
          You have already registered for the event
        </h1>
      </div>
    )
  }

  renderRegistrationStatus = state => {
    switch (state) {
      case 'INITIAL':
        return this.renderNoActiveEventView()
      case 'YET_TO_REGISTER':
        return this.renderYetToRegisterView()
      case 'REGISTERED':
        return this.renderRegisteredView()
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationsClosedView()
      case 'REGISTER':
        return this.renderRegisteredView()
      default:
        return null
    }
  }

  render() {
    const {state} = this.props
    return <>{this.renderRegistrationStatus(state)}</>
  }
}

export default ActiveEventRegistrationDetails
