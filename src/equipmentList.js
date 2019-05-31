import React, { Component } from 'react';
import './styles/equipmentList.css'

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
        equipment: response.results
      })
    })
  }

  render(){
    const { equipment } = this.state;
    console.log(equipment);
    var list = equipment.map(function(item){
      return (
        <>
          <li className='item'>{item.name}</li>
        </>
      )
    })

    return(
      <div className="container">
        <ul className="fullList">
          {list}
        </ul>
      </div>
    )
  }
}
