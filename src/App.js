import React, { Component } from 'react';
import Table from './Table'
import SimpleCharacterInfoForm from './SimpleCharacterForm'

export default class App extends Component {
  state = {
    addCharacter: false,
    characters: JSON.parse(localStorage.getItem('characters'))

  }

  addCharacter = () => {
    this.setState({
      addCharacter: true
    })

  }

  editCharacter = index => {
    const { characters } = this.state;

  }

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !==index;
      })
    }, function(){ this.saveCharacters()})
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character], addCharacter: false}, function(){
      this.saveCharacters()
    })
  }

  saveCharacters = () => {
    localStorage.setItem('characters', JSON.stringify(this.state.characters))
  }

    render() {
      const {characters} = this.state;
      const {addCharacter} = this.state;

      return addCharacter ?
      this.renderWithForm(characters) :
      this.renderWithOutForm(characters)
    }



    renderWithForm(characters){
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

    renderWithOutForm(characters){
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
