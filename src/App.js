
import React, { Component } from 'react';
import Table from './Table'
import SimpleCharacterInfoForm from './SimpleCharacterForm'
import SimpleCharacterEditForm from './SimpleCharacterEditForm'

import CharacterSkillsForm from './characterSkillsForm'


export default class App extends Component {
  state = {
    addForm: false,
    editForm: false,
    character: []
  }

  addCharacter = () => {
    this.setState({
      addForm: true
    })
  }

  editCharacter = index => {
    console.log(index);
    this.setState({
      editForm: true,
      character: index
    })
  }

  removeCharacter = index => {

    const url = `http://localhost:3000//api/v1/basics/${index}`

    fetch(url,{
      method: 'DELETE'
  })
  .then((response) => {
    return response.json()
  })
  .then((response) => {
   this.setState({})
  })
  .catch(error => console.error('Error:', error));
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
     }).then((res) =>{
       this.setState({addForm: false})
     })
   }

   handleEdit = (character) => {
     console.log(character);
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
        this.setState({editForm: false})
      })
    }

    render() {
      const {characters, addForm, editForm, character} = this.state;
      let render = ''
      if (addForm === true){
          render = this.renderAddCharacter(characters)
        } else if (editForm === true) {
          render = this.renderEditCharacter(character)
        } else {
          render = this.renderWithOutForms(characters)
        }
    return render
    }

    renderAddCharacter(characters){
      return(
        <div className="characterTable">
            <Table
              characterData={characters}
              removeCharacter={this.removeCharacter}
              editCharacter={this.editCharacter}
           />
             <SimpleCharacterInfoForm
                handleSubmit={this.handleSubmit}
            />
          <button onClick={this.addCharacter}>Add Character</button>
        </div>
      )
    }

    renderEditCharacter(character){
      return(
        <div className="characterTable">
            <Table
              characterData={character}
           />
         <SimpleCharacterEditForm
                character={character}
                handleEdit={this.handleEdit}
            />
          <button onClick={this.EditCharacter}>Edit Character</button>
        </div>
      )

    }

    renderEditCharacterSKills(character){
      return(
        <div className="characterSkillsForm">
          <CharacterSkillsForm
            handleEdit={this.handleEdit}
            character={character}/>
        </div>
      )
    }

    renderWithOutForms(characters){
      return(
        <div className="characterTable" style={{backgroundColor: '#BADEFE'}}>
            <Table
              characterData={characters}
              removeCharacter = {this.removeCharacter}
              editCharacter={this.editCharacter}
           />
         <center>
          <button onClick={this.addCharacter}>Add Character</button>
          </center>
        </div>
      )
    }
}
