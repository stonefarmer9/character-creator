import React, { Component } from 'react';

export default class EquipmentList extends Component {
  constructor(props){
    super(props)
    this.state = {
      equipment: [],
    }
  }

  componentDidMount(){
    this.getEquipment()
  }

  getEquipment = () => {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const url = "http://dnd5eapi.co/api/equipment"

    fetch(proxyUrl + url, {
      method: 'GET',
    })
    .then((response) => {
      console.log(response)
      console.log("got to first then")
      return response.json()
    })
    .then((response) => {
      console.log("second then")
      this.setState({
        equipment: response
      })
    })
  }

  render(){
    const { equipment } = this.state

    return(
      <div className="container">
      {equipment.count}
      </div>
    )
  }
}
