import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <div>
        <table className="table table-striped table-hover">
          <thead class="table-primary">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Eva</td>
              <td>Holmäck Svensson</td>
              <td>eva.holmback@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
