import React, {Component} from 'react';

export default class Counter extends Component{
    constructor(props){
      super(props);
      this.state = {count: 101, diff: 1}
      this.count = this.state.count;
    }

  handleAdd = ()=>{
    this.setState((preState, props) => {
      return  {
        count: preState.count + props.diff
      };
    });
  }

  handleSubtract = ()=>{
    this.setState((preState, props) => {
      return {
        count: preState.count - props.diff
      };
    });
  }
  
    render(){
      return(
        <div>
          <span>count is : {this.state.count} </span>
          <button onClick={this.handleSubtract}> - {this.props.diff} </button>
          <button onClick={this.handleAdd}> + {this.props.diff} </button>
        </div>
      );
    }
  }
