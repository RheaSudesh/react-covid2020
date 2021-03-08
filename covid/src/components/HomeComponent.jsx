import React, { Component } from 'react'
import axios from 'axios'
import './SearchComponent.css'
import SearchComponent from './SearchComponent';
import StateComponent from './StateComponent';
export default class HomeComponent extends Component {
  
  constructor(){
    super();
    this.state={
      data:[],
    totalActive:0,
    totalConfirmed:0,
    totalRecovered:0,
    totalDeceased:0
    }
  }
  
  componentDidMount(){
    axios.get("https://api.covid19india.org/data.json")
    .then(res => {
      this.setState(
        { data: res.data.statewise,
          totalActive : res.data.statewise[0].active,
          totalConfirmed : res.data.statewise[0].confirmed,
          totalDeceased : res.data.statewise[0].deaths,
          totalRecovered : res.data.statewise[0].recovered,

        })
      })
    .catch(err => {
      console.log("error");
    })
  }


  render() {
        console.log(this.state.totalActive)
        return (
          <>
          <center>
          <h1> Covid19 DashBoard</h1>
          <div className="total-cases">
            <StateComponent totalActive={this.state.totalActive} totalDeceased={this.state.totalDeceased} totalRecovered={this.state.totalRecovered}  totalConfirmed={this.state.totalConfirmed} />
          </div>
          <div className="searched-cases">            
            <SearchComponent listOfStates={this.state.data} />
          </div>
          </center> 
          </>
          
        );
    
  }
}
