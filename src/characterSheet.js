import React, { Component } from 'react';


export default class characterSheet extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div>
        <ul>
          <li>{this.props.character.name}</li>
          <li>{this.props.character.age}</li>
          <li>{this.props.character.race}</li>
          <li>{this.props.character.classs}</li>
          <li>{this.props.character.height}</li>
          <li>{this.props.character.sex}</li>
        </ul>
      </div>
    )
  }
}
