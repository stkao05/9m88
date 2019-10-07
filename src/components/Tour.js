import React from "react"

export default function Tour() {
  return (
    <div className="tour light_background">
      <h1>Tour</h1>

      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Location</th>
            <th>Venue</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>19 Dec 19, 20 pm</td>
            <td>Philadelphia, PA, United States</td>
            <td>The Fox Theater Pomona</td>
            <td className="ticket">
              <a className="btn btn_invert" href="">Ticket</a>
            </td>
          </tr>
          <tr>
            <td>19 Dec 19, 20 pm</td>
            <td>Philadelphia, PA, United States</td>
            <td>The Fox Theater Pomona</td>
            <td className="ticket">
              <a className="btn btn_invert" href="">Ticket</a>
            </td>
          </tr>
          <tr>
            <td>19 Dec 19, 20 pm</td>
            <td>Philadelphia, PA, United States</td>
            <td>The Fox Theater Pomona</td>
            <td className="ticket">
              <a className="btn btn_invert" href="">Ticket</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
