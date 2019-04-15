import React, { Component } from 'react';
import Table from './Table';
import Forms from './Forms';
import Background from './images/parchment.png'

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: '100% 100%'
};

export default class App extends Component {
  state = {
    addForm: false,
    editForm: false,
    character: '',
    form: ''
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

  clearState = () => {
    this.setState({
      editForm: false,
      addForm: false
    })
  }

  render() {
    const {characters, addForm, editForm, character, form} = this.state;
    let render;
    if (addForm === true || editForm === true){
      render = <Forms
                clearState={this.clearState}
                form={form}
                character={character}
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
