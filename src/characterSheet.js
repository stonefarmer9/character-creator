import React, { Component } from 'react';
import './characterSheet.css'
import Background from './images/parchment.png'
var modify = require('./scripts/modifiers')

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: '100% 100%'
};


export default class characterSheet extends Component {
  constructor(props){
    super(props)
    this.state = {
      skills: []
    }
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

    const { skills } = this.state;
    const skillList =
     <ul style={{ listStyleType: "none", fontSize:"35px" }}>
       <li>Strength: {skills.strength} ||--||+{modify.modifier(skills.strength)}</li>
       <li>Dexterity: {skills.dexterity} ||---||+{modify.modifier(skills.dexterity)}</li>
       <li>Constitution: {skills.constitution} ||---||+{modify.modifier(skills.constitution)}</li>
       <li>Intelligence: {skills.intelligence} ||---||+{modify.modifier(skills.intelligence)}</li>
       <li>Wisdom: {skills.wisdom} ||---||+{modify.modifier(skills.wisdom)}</li>
       <li>Chasrisma: {skills.charisma} ||---||+{modify.modifier(skills.charisma)}</li>
     </ul>;

    const loading = <h2> loading ... </h2>

    return(
      <div className="characterSheet" style={ sectionStyle }>
        <div className="basicsList" style={{ float:"left", backgroundImage: `url(${Background})`, backgroundSize: '100% 100%', width:"500px", height:"500px", marginTop:"20px", marginLeft:"200px"}}>
          <ul style={{ listStyleType: "none", fontSize:"45px" }}>
            <li>Name: {this.props.character.name}</li>
            <li>Age: {this.props.character.age}</li>
            <li>Race: {this.props.character.race}</li>
            <li>Class: {this.props.character.classs}</li>
            <li>Height: {this.props.character.height}</li>
            <li>Sex: {this.props.character.sex}</li>
          </ul>
        </div>
          <div className="skillsList" style={{ float:"right", backgroundImage: `url(${Background})`, backgroundSize: '100% 100%', width:"500px", height:"500px", marginTop:"20px", marginRight:"200px", marginColor:"#0066ff"}}>
          {skills.length === 0 ? loading : skillList}
        </div>
          <button onClick={() => this.props.clearState()}>Close</button>
      </div>
    )
  }
}
