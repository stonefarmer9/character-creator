import React, { Component } from 'react';
import Table from './Table'
import SimpleCharacterInfoForm from './SimpleCharacterForm'
import CharacterSkillsForm from './characterSkillsForm'

export default class App extends Component {
  state = {
    addForm: false,
    editForm: false,
    characters: JSON.parse(localStorage.getItem('characters')),
    character: []

  }

  addCharacter = () => {
    this.setState({
      addForm: true
    })

  }

  editCharacter = index => {
    const { characters } = this.state;
    this.setState({
      character: characters.filter((character, i) => {
        return i === index
      }),
    editForm: true})
    }

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    }, function(){ this.saveCharacters()})
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character], addForm: false}, function(){
      this.saveCharacters()
    })
  }

  handleEdit = newStats => {
    const { character } = this.state;
    const { characters} = this.state;


    const update = characters.map(function(entry) { return entry.name === character[0].name ? newStats : entry; });

    this.setState({
      characters: update,
      editForm: false
    }
  )
}

  saveCharacters = () => {
    localStorage.setItem('characters', JSON.stringify(this.state.characters))
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
