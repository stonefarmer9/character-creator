import React, { Component } from 'react';
import SimpleCharacterInfoForm from './SimpleCharacterForm'
import SimpleCharacterEditForm from './SimpleCharacterEditForm'


export default class Forms extends Component {
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

  handleSubmit = (character) => {
    const url = "http://localhost:3000//api/v1/basics"
    const body = JSON.stringify(//can the below be replaced with this.state?
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
       this.props.clearState({addForm: false})
     })
   }

   handleEdit = (character) => {
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
        this.props.clearState({editForm: false})
      })
    }

    render(){
      console.log(this.props);
      let form;
      if (this.props.form === "add"){
        form = <SimpleCharacterInfoForm
                   handleSubmit={this.handleSubmit}
                   />
               } else if (this.props.form === "edit"){
        form = <SimpleCharacterEditForm
                  character={this.props.character}
                  handleEdit={this.handleEdit}
                  />
      }
      return (
        <div className="forms">
          { form }
          <h1>Hello world</h1>
        </div>
      )
    }
}
