// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {item, onc} = props
  const {title, isfav, id} = item
  let {date} = item
  const luck = () => {
    onc(id)
  }
  date = format(new Date(date), 'dd mm yyyy,EEEE')
  console.log(isfav)
  const imageurl = isfav
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="its" key={item.id}>
      <h4>{title}</h4>
      <p>date:{date}</p>
      <button data-testid="star" onClick={luck}>
        <img src={imageurl} alt={imageurl} />
      </button>
    </li>
  )
}

export default AppointmentItem
