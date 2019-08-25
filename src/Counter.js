import React, {Component} from 'react';

export default class Counter extends Component{
  constructor(props){
    super(props);

  }

  componentDidUpdate() {
    console.log('Counter componentDidUpdate');
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(`'Submitting ${this.props.diff}`);
  }
  
    render(){
      return(
        <div>
          <form onSubmit={this.onFormSubmit}>
            <span>Diff: </span>
            <input type="text" name="diff" value = {this.props.diff} onChange={this.props.onDiffInputChange}/>
            <button>Submit Diff</button>
          </form>

          <span>count is : {this.props.count} </span>
          <button onClick={this.props.handleSubtract}> -{this.props.diff} </button>
          <button onClick={this.props.handleAdd}> +{this.props.diff} </button>
        </div>
      );
    }
  }
