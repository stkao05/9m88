import React from "react"

const events = [
  {
    time: "09 October 2019",
    venue: "The Wall Live House 這牆音樂藝文展演空間",
    location: "Taipei, Taiwan",
  },
  {
    time: "19 October 2019",
    venue: "Pepsi Center",
    location: "Denver, CO",
  },
  {
    time: "01 November 2019",
    venue: "EagleBank Arena",
    location: "Fairfax, VA",
  },
]

export default function Tour() {
  return (
    <div className="tour light_background section">
      <h1>Tour</h1>
      <a name="section_tour"></a>

      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Venue</th>
            <th>Location</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {events.map(event => {
            return (
              <tr>
                <td>{event.time}</td>
                <td>{event.venue}</td>
                <td>{event.location}</td>
                <td className="ticket">
                  <a className="btn btn_invert" href="">
                    Ticket
                  </a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <ul>
        {events.map(event => {
          return (
            <li>
              <div className="event_time"> {event.time}</div>
              <div className="event_venue">{event.venue}</div>
              <div className="event_location">{event.location}</div>

              <div>
                <a className="btn btn_invert" href="">
                  Ticket
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
