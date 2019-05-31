import React, { Component } from 'react';
import './styles/equipmentList.css'
import ItemCard from './ItemCard'

export default class EquipmentList extends Component {
  constructor(props){
    super(props)
    this.state = {
      equipment: [],
      itemSelected: false,
      itemURL: '',
    }
    this.selectItem = this.selectItem.bind(this)

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

  selectItem(item){
    this.setState({
      itemSelected: true,
      itemURL: item.url
    })
  }

  render(){
    const { equipment, itemSelected, itemURL } = this.state;
    var itemCard;

    if (itemSelected === true) {itemCard = <ItemCard url={itemURL}/>}
    var list = equipment.map(function(item){
      return (
        <>
          <li className='item'><button onClick={ ()=> this.selectItem(item) }>{item.name}</button></li>
        </>
      )
    })

    return(
      <div className="container">
        <ul className="fullList">
          {list}
          {itemCard}
        </ul>
      </div>
    )
  }
}
