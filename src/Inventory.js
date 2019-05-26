import React, { Component } from 'react';

export default class Inventory extends Component {
  constructor(props){
    super(props)

    this.state = {
      inventory: [{
        name: 'warhammer', value: 100, weight: 15, rarity:'common'},
       { name: 'grappling Hook', value: 10, weight: 3, rarity:'common'},
       { name: 'holy focus', value: 25, weight: 0.5, rarity: 'uncommon'}]
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
        <ul className="inventory">
          <li>{item.name}</li>
          <li>{item.value}</li>
          <li>{item.weight}</li>
          <li>{item.rarity}</li>
        </ul>
      )
    })

    return(
      <div>
      {list}
      </div>
    )
  }

}
