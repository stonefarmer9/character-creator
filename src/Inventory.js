import React, { Component } from 'react';
import './styles/inventory.css'
import EquipmentList from './equipmentList'

export default class Inventory extends Component {
  constructor(props){
    super(props)

    this.state = {
      addMenu: false,
      inventory: [{
        name: 'warhammer', value: 100, weight: 15, rarity:'common'},
       { name: 'grappling Hook', value: 10, weight: 3, rarity:'common'},
       { name: 'holy focus', value: 25, weight: 0.5, rarity: 'uncommon'},
       { name: 'spellbook', value: 2500, weight: 0.5, rarity: 'rare'},
       { name: 'gold ring', value: 250, weight: 0.1, rarity: 'uncommon'},
       { name: 'Heavy Armour', value: 1350, weight: 50, rarity: 'common'},
       { name: 'lantern', value: 10, weight: 0.7, rarity: 'common'},
       { name: 'explorers pack', value: 150, weight: 18, rarity: 'common'},
       { name: 'von Drak blood blade', value: 10000, weight: 15, rarity: 'legendary'}]
    }
  }

  addMenu = () => {
    this.setState({
      addMenu: true
    })
  }

  render(){
    const { inventory, addMenu } = this.state;
    var menu;
    const list = inventory.map(function(item){
      return (
        <>
          <li className="name" id={item.index}>{item.name}</li>
          <li className="value" id={item.index}>Value:{item.value}gp</li>
          <li className="weight" id={item.index}>Weight:{item.weight}lb</li>
          <li className="rarity" id={item.index}>Rarity:{item.rarity}</li>
        </>
      )
    })
    if (addMenu === true){ menu = <EquipmentList/>}
    return(
      <div className="container">
        <div className="inventoyScrollList">
          <ul className="inventory">{list}</ul>
        </div>
        <div className="buttons">
          <button className="closeButton" onClick={()=> this.props.showInventory(false)}>Close</button>
          <button className="closeButton" onClick={() => this.addMenu()}>Add Item</button>
        </div>
        <div className="equipmentList">{menu}</div>
      </div>
    )
  }

}
