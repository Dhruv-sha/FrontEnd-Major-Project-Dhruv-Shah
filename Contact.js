import React, { Component } from "react";

class Contact extends Component {
  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '10px' // Optional: add space between the list containers
    };

    const listStyle = {
      width: '300px'
    };

    return (
      <div style={containerStyle}>
        <ul style={listStyle} className="list-group">
          <li className="list-group-item active" aria-current="true">About ABC pizzaaas</li>
          <li className="list-group-item">Who we are</li>
          <li className="list-group-item">Work with us</li>
          <li className="list-group-item">Report a fraud</li>
          <li className="list-group-item">Invertors details</li>
        </ul>

        <ul style={listStyle} className="list-group">
          <li className="list-group-item active" aria-current="true">Pizza verse</li>
          <li className="list-group-item">App 1 </li>
          <li className="list-group-item">App 2 </li>
          <li className="list-group-item">App 3 </li>
        </ul>

        <ul style={listStyle} className="list-group">
          <li className="list-group-item active" aria-current="true">For restraunts</li>
          <li className="list-group-item">Partner with us</li>
          <li className="list-group-item">app for you</li>
        </ul>

        <ul style={listStyle} className="list-group">
          <li className="list-group-item active" aria-current="true">Learn More</li>
          <li className="list-group-item">Privacy</li>
          <li className="list-group-item">Security</li>
          <li className="list-group-item">Terms</li>
          <li className="list-group-item">Sitemap</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
