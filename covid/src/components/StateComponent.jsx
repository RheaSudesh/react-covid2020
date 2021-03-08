import React, { Component } from 'react'
import './StateComponent.css'
export default class StateComponent extends Component {
  render() {
    return (
      
      <div className="searched-container">
          <div className="activey box">Total Active Cases: <p>{this.props.totalActive}</p></div>
          <div className="confirm box">Total Confirmed Cases:<p>{this.props.totalConfirmed}</p></div> 
          <div className="death box">Total Deceased Cases:<p>{this.props.totalDeceased}</p></div> 
          <div className="recover box">Total Recovered Cases:<p>{this.props.totalRecovered}</p></div>
      </div>
      
    )
  }
}
