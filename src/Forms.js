import React, { Component } from 'react';
import SimpleCharacterInfoForm from './SimpleCharacterForm'
import SimpleCharacterEditForm from './SimpleCharacterEditForm'
import CharacterSkillsForm from './characterSkillsForm'
var modify = require('./scripts/modifiers')


export default class Forms extends Component {
  constructor (props) {
    super(props);
  }

  handleSubmit = (character) => {
    const url = "http://localhost:3000//api/v1/basics"
    const body = JSON.stringify(
     { name: character.name,
       age: character.age,
       sex: character.sex,
       classs: character.classs,
       race: character.race,
       height: character.height
     })
     fetch(url,{
       method: 'POST',
       headers:{
         'Content-Type': 'application/json'
       },
       body: body
     }).then((res) => {
       this.props.clearState()
       this.props.getCharacters()
     })
   }

   handleEdit = (character) => {
     const url = `http://localhost:3000//api/v1/basics/${character.id}`
     const body = JSON.stringify(
      { name: character.name,
        age: character.age,
        sex: character.sex,
        classs: character.classs,
        race: character.race,
        height: character.height
      })
      fetch(url,{
        method: 'PATCH',
        headers:{
          'Content-Type': 'application/json'
        },
        body: body
      }).then((res) =>{
        this.props.clearState()
        this.props.getCharacters()
      })
    }

    handleSkills = (character) => {
      console.log(modify.modifier(character.strength));
      const url = "http://localhost:3000//api/v1/skills"
      const body = JSON.stringify({
        strength: character.strength,
        dexterity: character.dexterity,
        constitution: character.constitution,
        intelligence: character.intelligence,
        wisdom: character.wisdom,
        charisma: character.charisma,
        basic_id: character.basic_id
      })
      fetch(url, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: body
      }).then((res) =>{
        this.props.clearState()
      })

    }

    render(){
      let form;
      if (this.props.form === "add"){
        form = <SimpleCharacterInfoForm
                   handleSubmit={this.handleSubmit}
                   />
               } else if (this.props.form === "edit"){
        form = <SimpleCharacterEditForm
                  character={this.props.character}
                  handleEdit={this.handleEdit}
                  />
              } else if (this.props.form === "skills"){
                form = <CharacterSkillsForm
                  character={ this.props.character }
                  handleSkills= { this.handleSkills }
                />
              }
      return (
        <div className="forms">
          { form }
        </div>
      )
    }
}
