import React, { Component } from "react";
import Goa from "../assets/images/Goa.jpg";
import Gujrat from "../assets/images/Gujarat.jpg";
import Himachal from "../assets/images/Himachal-Pradesh.jpg";
import Kerala from "../assets/images/Kerala.jpg";
import Rajasthan from "../assets/images/Rajasthan.jpg";

class City extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{margin: '20px'}}>
          <img src={Goa} alt="Goa" />
        </div>
        <div style={{margin: '20px'}}>
          <img src={Gujrat} alt="Goa" />
        </div>
        <div style={{margin: '20px'}}>
          <img src={Himachal} alt="Goa" />
        </div>
        <div style={{margin: '20px'}}>
          <img src={Kerala} alt="Goa" />
        </div>
        <div style={{margin: '20px'}}>
          <img src={Rajasthan} alt="Goa" />
        </div>
      </div>
    );
  }
}

export default {
  component: City,
};
