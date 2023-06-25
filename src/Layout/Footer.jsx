import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container mb-2">
          <p>© {new Date().getFullYear()} Udacity</p>
        </div>
      </footer>
    );
  }
}
export default Footer;
