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

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !==index;
      })
    })
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character], addCharacter: false})
  }

    render() {
      const {characters, addCharacter} = this.state;

      return addCharacter ? this.renderWithForm() : this.renderWithOutForm()
    }

    renderWithForm(){
      const {characters, addCharacter} = this.state;

      return(
        <div className="characterTable">
            <Table
              characterData={characters}
              removeCharacter = {this.removeCharacter}
           />

             < SimpleCharacterInfoForm
                handleSubmit={this.handleSubmit}
            />


          <button onClick={this.addCharacter}>Add Character</button>

        </div>
      )
    }

    renderWithOutForm(){
      const {characters, addCharacter} = this.state;

      return(
        <div className="characterTable">
            <Table
              characterData={characters}
              removeCharacter = {this.removeCharacter}
           />

          <button onClick={this.addCharacter}>Add Character</button>

        </div>
      )
    }
}
