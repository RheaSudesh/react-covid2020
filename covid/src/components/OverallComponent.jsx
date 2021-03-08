import React, { Component } from 'react'
import './OverallComponent.css'

export default class OverallComponent extends Component {
  renderOutputTable=()=>{

    const data=this.props.stateListSearched;
    console.log(data)
    return (
      <div>
            <table className="display-table">
              <thead>
                <tr>
                <td>State Name</td>
                <td>Active Cases</td>
                <td>Recovered cases</td>
                <td>Death cases</td>
                <td>Confirmed Cases</td>
                <td>Recovery Ratio</td>
                </tr>
              </thead>
              <tbody>
                {data && data.map((item) => (
                  <tr key={item.state}>
                    <td>{item.state}</td>
                    <td>{item.active}</td>
                    <td>{item.recovered}</td>
                    <td>{item.deaths}</td>
                    <td>{item.confirmed}</td>
                    <td>{Math.round(item.recovered/item.active)}</td>
                  </tr>
                ))
                }
              </tbody>
              
            </table>
            
          </div>
    );
  }
  
  render() {
    return (
      <div>
        {this.renderOutputTable()}
        
      </div>
    )
  }
}
