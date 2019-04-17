import React, { Component } from 'react';
import SimpleCharacterInfoForm from './SimpleCharacterForm'
import SimpleCharacterEditForm from './SimpleCharacterEditForm'
import CharacterSkillsForm from './characterSkillsForm'

export default class Forms extends Component {
  constructor (props) {
    super(props);
  }

  handleSubmit = (character) => {
    const url = "http://localhost:3000//api/v1/basics"
    const body = JSON.stringify(//can the below be replaced with this.state?
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
     }).then((res) => { this.props.clearState({addForm: false})})
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
        this.props.clearState({editForm: false})
      })
    }

    handleSkills = (character) => {
      console.log(character, character.basic_id);
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
