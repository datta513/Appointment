// Write your code here
import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem'

export default class Appointments extends Component {
  state = {title: '', date: '', lis: []}

  submit = event => {
    event.preventDefault()
    console.log('submited form')
    const {title, date} = this.state
    const currentele = {
      id: v4(),
      title,
      date,
      isfav: false,
    }
    this.setState(prev => ({
      lis: [...prev.lis, currentele],
      title: '',
      date: '',
    }))
  }

  changein = event => {
    this.setState(prev => ({
      title: event.target.value,
    }))
  }

  datechange = event => {
    this.setState(prev => ({date: event.target.value}))
  }

  render() {
    const {lis, title, date} = this.state
    console.log(lis)
    return (
      <div className="Main1">
        <div className="container1">
          <div className="appshe">
            <form className="Add" onSubmit={this.submit}>
              <h1>Add Appointment</h1>
              <label htmlFor="inp">TITLE</label>
              <input
                type="text"
                id="inp"
                className="inp"
                onChange={this.changein}
                value={title}
              />
              <label htmlFor="dat">Date</label>
              <input
                type="date"
                className="inp"
                id="dat"
                onChange={this.datechange}
                value={date}
              />
              <button type="submit" className="button1">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt=" appointments"
            />
          </div>
          <div>
            <div className="secn">
              <h1>Appointments</h1>
              <button type="button" className="button1">
                Starred
              </button>
            </div>
            <ul className="item">
              {lis.map(each => (
                <AppointmentItem item={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
