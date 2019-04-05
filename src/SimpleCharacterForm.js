import React, { Component } from 'react'
export default class SimpleCharacterInfoForm extends Component {
  constructor (props) {
    super(props);

    this.initialState = {
      name: '',
      age: '',
      race: '',
      classs: '',
      sex: '',
      height: ''
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

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { name, age, race, classs, sex, height} = this.state;
    return(
      <form>
        <label>Name:</label>
        <input
          type ="text"
          name="name"
          value={name}
          onChange={this.handleChange} />
          <label>Age:</label>
          <input
            type ="text"
            name="age"
            value={age}
            onChange={this.handleChange} />
          <label>Race:</label>
          <input
            type ="text"
            name="race"
            value={race}
            onChange={this.handleChange} />
          <label>Class:</label>
          <input
            type ="text"
            name="classs"
            value={classs}
            onChange={this.handleChange} />
          <label>Sex:</label>
          <input
            type ="text"
            name="sex"
            value={sex}
            onChange={this.handleChange} />
          <label>Height:</label>
          <input
            type ="text"
            name="height"
            value={height}
            onChange={this.handleChange} />
          <input
            type="submit"
            value="Submit"
            onClick={this.submitForm} />
          </form>
    )
  }
}
