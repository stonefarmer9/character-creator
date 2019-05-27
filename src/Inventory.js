import React, { Component } from 'react';
import './inventory.css'

export default class Inventory extends Component {
  constructor(props){
    super(props)

    this.state = {
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

  // componentDidMount(){
  //   const id = this.props.character.id
  //   const url = `http://localhost:3000//api/v1/inventory/${id}`
  //
  //   fetch(url)
  //   .then( (res) => {
  //     return res.json()
  //   })
  //   .then((res) => {
  //     this.setState({
  //       inventory: res
  //     })
  //   })
  // }

  render(){
    const { inventory } = this.state;

    const list = inventory.map(function(item){
      return (
        <>
          <li className="name">{item.name}</li>
          <li className="value">Value:{item.value}gp</li>
          <li className="weight">Weight:{item.weight}lb</li>
          <li className="rarity">Rarity:{item.rarity}</li>
        </>
      )
    })
    return(
      <div>
      <div className="inventoyScrollList">
      <ul className="inventory">{list}</ul>

      </div>
      <div>
      <button className="closeButton" onClick={()=> this.props.showInventory(false)}>Close</button>
      </div>
      </div>
    )
  }

}
