import React, { Component } from 'react';
import Table from './Table';
import Forms from './Forms';
import Background from './images/parchment.png'

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: '100% 100%'
};

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      addForm: false,
      editForm: false,
      skillsForm: false,
      character: '',
      form: '',
      characters: []
    }
    this.clearState = this.clearState.bind(this)
    this.getCharacters = this.getCharacters.bind(this)
  }


  componentDidMount(){
    console.log("Did mount running...");
    this.getCharacters()
    console.log("finished in fxn");
  }

  getCharacters(){
    console.log("get characters");
    const url = "http://localhost:3000//api/v1/basics"

    fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      this.setState({
        characters: response
      })
      console.log("got characters");
    })
  }

  addCharacter = () => {
    this.setState({
      addForm: true,
      form: "add"
    })
  }

  editCharacter = index => {
    this.setState({
      editForm: true,
      character: index,
      form: "edit"

    })
  }

  addSkills = index => {
    this.setState({
      skillsForm: true,
      form: "skills",
      character: index
    })
  }

  clearState = () => {
    this.setState({
      editForm: false,
      addForm: false,
      skillsForm: false,
    })
  }

  render() {
    const {characters, addForm, editForm, skillsForm, character, form} = this.state;
    let render;
    if (addForm === true || editForm === true || skillsForm === true){
      render = <Forms
                clearState={this.clearState}
                form={form}
                character={character}
                getCharacters={this.getCharacters}
                />
    }
    return  (
      <div className="characterTable" style={ sectionStyle }>
        <center>
          <h1 style={{ color: '#b3b3b3' }}> Character control </h1>
            <Table
              characterData={characters}
              removeCharacter = {this.removeCharacter}
              editCharacter={this.editCharacter}
              addSkills={this.addSkills}
              getCharacters={this.getCharacters}
              />
        <center>
          <button onClick={this.addCharacter}>Add Character</button>
        </center>
        <div className="forms">
          { render }
        </div>
        </center>
      </div>
    )
  }
}
