// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {item} = props
  const {title, isfav} = item
  let {date} = item
  date = format(new Date(date), 'dd mm yyyy,EEEE')
  const imageurl = isfav
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="its">
      <h4>{title}</h4>
      <p>date:{date}</p>
      <button data-testid="star">
        <img src={imageurl} alt={imageurl} />
      </button>
    </li>
  )
}

export default AppointmentItem
