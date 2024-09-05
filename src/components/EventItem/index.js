import './index.css'

const EventItem = props => {
  const {details, onClickEventItem} = props
  const {id, imageUrl, location, registrationStatus, name} = details
  const onClickEvent = () => {
    onClickEventItem(registrationStatus)
  }
  return (
    <li className="event-item-container">
      <button className="event-item" type="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className="event-img" />
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
