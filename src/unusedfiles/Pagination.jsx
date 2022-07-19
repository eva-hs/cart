import React, { Component } from "react";

class Pagination extends Component {
  render() {
    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="http://www.hd.se">
                HD
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="http://www.aftonbladet.se">
                Aftonbladet
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
