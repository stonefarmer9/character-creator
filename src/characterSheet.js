import React, { Component } from 'react';
var modify = require('./scripts/modifiers')


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
     <ul style={{ listStyleType: "none" }}>
       <li>{skills.strength}</li>
       <li>{skills.dexterity}</li>
       <li>{skills.constitution}</li>
       <li>{skills.intelligence}</li>
       <li>{skills.wisdom}</li>
       <li>{skills.chasrisma}</li>
     </ul>;

    const loading = <h2> loading ... </h2>

    return(
      <div className="characterSheet">
        <div className="basicsList">
          <ul style={{ listStyleType: "none" }}>
            <li>{this.props.character.name}</li>
            <li>{this.props.character.age}</li>
            <li>{this.props.character.race}</li>
            <li>{this.props.character.classs}</li>
            <li>{this.props.character.height}</li>
            <li>{this.props.character.sex}</li>
          </ul>
        </div>
          <div className="skillsList">
          {skills.length === 0 ? loading : skillList}
        </div>
        <div>
          <button onClick={() => this.props.clearState()}>Close</button>
        </div>
      </div>
    )
  }
}
