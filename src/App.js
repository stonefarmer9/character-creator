import React, { Component } from 'react';
import Table from './Table'
import SimpleCharacterInfoForm from './SimpleCharacterForm'
export default class App extends Component {
  state = {
    addCharacter: false,
    characters: []

  }

  addCharacter = () => {
    this.setState({
      addCharacter: true
    })

  }

  editCharacter = () => {

  }

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !==index;
      })
    })
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character], addCharacter: false}, function(){
      this.saveCharacter(character)
    })
  }

  saveCharacter = character => {
    localStorage.setItem('characters', JSON.stringify(this.state.characters))
  }

    render() {

      const {addCharacter} = this.state;

      return addCharacter ? this.renderWithForm() : this.renderWithOutForm()
    }

    renderWithForm(){
      const {characters} = this.state;

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

    renderWithOutForm(){
      const {characters} = this.state;

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

    retrieveCharacters(){

    }
}
