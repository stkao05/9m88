import React from "react"

export default function Tour() {
  return (
    <div className="tour light_background section">
      <h1>Tour</h1>

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
          <tr>
            <td>19 Dec 19, 20 pm</td>
            <td>The Fox Theater Pomona</td>
            <td>Philadelphia, PA, United States</td>
            <td className="ticket">
              <a className="btn btn_invert" href="">
                Ticket
              </a>
            </td>
          </tr>
          <tr>
            <td>19 Dec 19, 20 pm</td>
            <td>The Fox Theater Pomona</td>
            <td>Philadelphia, PA, United States</td>
            <td className="ticket">
              <a className="btn btn_invert" href="">
                Ticket
              </a>
            </td>
          </tr>
          <tr>
            <td>19 Dec 19, 20 pm</td>
            <td>The Fox Theater Pomona</td>
            <td>Philadelphia, PA, United States</td>
            <td className="ticket">
              <a className="btn btn_invert" href="">
                Ticket
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <ul>
        <li>
          <div className="event_time"> 19 Dec 19, 20 pm</div>
          <div className="event_location">Philadelphia, PA, United States</div>
          <div className="event_venue">The Fox Theater Pomona</div>

          <div>
            <a className="btn btn_invert" href="">
              Ticket
            </a>
          </div>
        </li>
      </ul>
    </div>
  )
}
