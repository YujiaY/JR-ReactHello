import React, {Component} from 'react'


export default class WelcomeForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(`'Submitting ${this.state.name}`);
  }

  onInputChange = (e) => {
    console.log(e.target);
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <span>Name: </span>
        <input type="text" name="name" value = {this.state.name} onChange={this.onInputChange}/>
        <button>Submit Student</button>
      </form>
    )
  }
}
