import React, { Component } from 'react'
export default class CharacterSkillsForm extends Component {
  constructor (props) {
    super(props);

    this.initialState = {
      strength: '',
      dexterity: '',
      constitution: '',
      charisma: '',
      intelligence: '',
      wisdom: '',
      basic_id: this.props.character.id
    }

    this.state = this.initialState;
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({
      [name] : value
    })
  }

  submitForm = event => {
    event.preventDefault()
    this.props.handleSkills(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { strength, dexterity, constitution, charisma, intelligence, wisdom } = this.state;
    return(
      <form>
        <label>Strength:</label>
        <input
          type ="text"
          name="strength"
          value={strength}
          onChange={this.handleChange} />
          <label>Dexterity:</label>
          <input
            type ="text"
            name="dexterity"
            value={dexterity}
            onChange={this.handleChange} />
          <label>Constitution:</label>
          <input
            type ="text"
            name="constitution"
            value={constitution}
            onChange={this.handleChange} />
          <label>Charisma:</label>
          <input
            type ="text"
            name="charisma"
            value={charisma}
            onChange={this.handleChange} />
          <label>Intelligence:</label>
          <input
            type ="text"
            name="intelligence"
            value={intelligence}
            onChange={this.handleChange} />
          <label>Wisdom:</label>
          <input
            type ="text"
            name="wisdom"
            value={wisdom}
            onChange={this.handleChange} />
          <input
            type="submit"
            value="Submit"
            onClick={this.submitForm} />
          </form>
    )
  }
}
