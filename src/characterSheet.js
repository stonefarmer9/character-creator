import React, { Component } from 'react';
import Inventory from './Inventory'
import './characterSheet.css'
import Background from './images/parchment.png'
var modify = require('./scripts/modifiers')

export default class characterSheet extends Component {
  constructor(props){
    super(props)
    this.state = {
      skills: [],
      inventory: false,
    }
  }

  showInventory = () => {
    this.setState({
      inventory: true,
    })
  }

  componentDidMount(){
    const id = this.props.character.id
    const url = `http://localhost:3000//api/v1/skills/${id}`

    fetch(url)
    .then( (res) => {
      return res.json()
    })
    .then((res) => {
      this.setState({
        skills: res
      })
    })
  }


  render(){

    const { skills, inventory } = this.state;

    const loading = <h2> loading ... </h2>

    var showInventory;

    if (inventory === true) {showInventory = <Inventory/>}

    return(
      <div className="container">
        <br></br>
        <br></br>
        <div className="basicsList">
            <p className="charName">
              Name: {this.props.character.name}
            </p>
            <p className="charAge">
              Age: {this.props.character.age}
            </p>
            <p className="charRace">
              Race: {this.props.character.race}
            </p>
            <p className="charClass">
              Class: {this.props.character.classs}
            </p>
            <p className="charHeight">
              Height: {this.props.character.height}
            </p>
            <p className="charSex">
              Sex: {this.props.character.sex}
            </p>
          </div>
          <div className="skillsList">
            <div className="strength">
              Strength: {skills.strength} <br></br> +{modify.modifier(skills.strength)}
            </div>
            <div className="dexterity">
              Dexterity: {skills.dexterity} <br></br> +{modify.modifier(skills.dexterity)}
            </div>
            <div className="constitution">
              Constitution: {skills.constitution} <br></br> +{modify.modifier(skills.constitution)}
            </div>
            <div className="intelligence">
              Intelligence: {skills.intelligence} <br></br> +{modify.modifier(skills.intelligence)}
            </div>
            <div className="wisdom">
              Wisdom: {skills.wisdom} <br></br> +{modify.modifier(skills.wisdom)}
            </div>
            <div className="charisma">
              Chasrisma: {skills.charisma} <br></br> +{modify.modifier(skills.charisma)}
            </div>

        </div>
        <div className="buttons">
          <br></br>
          <button className="closeButton" onClick={() => this.props.clearState()}>Close</button>
          <button className="inventorybutton" onClick={() => this.showInventory()}>Inventory</button>
        </div>
        <div className="inventory">
          {showInventory}
        </div>
    </div>
    )
  }
}
