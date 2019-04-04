import React, { Component } from 'react';
import Table from './Table'
import SimpleCharacterInfoForm from './SimpleCharacterForm'
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

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    }, function(){ this.saveCharacters()})
  }

  handleSubmit = (character) => {
    console.log(character);
    const url = "http://localhost:3000//api/v1/basics"
    const body = JSON.stringify(
     { name: character.name,
       age: character.age,
       sex: character.sex,
       classs: character.classs,
       race: character.race,
       height: character.height
     })
     console.log(body);
     fetch(url,{
       method: 'POST',
       headers:{
         'Content-Type': 'application/json'
       },
       body: body
     }).then((res) =>{
       return res.json();
     }).then((res)=>{
       this.setState({addForm: false})
     })
  }

    render() {
      const {characters, addForm, editForm, character} = this.state;
      let render = ''
      if (addForm === true){
          render = this.renderAddCharacter(characters)
        } else if (editForm === true) {
          render = this.renderEditCharacterSKills(character)
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
             < SimpleCharacterInfoForm
                handleSubmit={this.handleSubmit}
            />
          <button onClick={this.addCharacter}>Add Character</button>
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
        <div className="characterTable">
            <Table
              characterData={characters}
              removeCharacter = {this.removeCharacter}
              editCharacter={this.editCharacter}
           />
          <button onClick={this.addCharacter}>Add Character</button>
        </div>
      )
    }
}
