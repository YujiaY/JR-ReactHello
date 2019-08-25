import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';
import WelcomeForm from './WelcomeForm'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 101,
      diff: +10
    };
    console.log('APP constructor');
  }

  handleAdd = ()=>{
    this.setState((preState) => {
      return  {
        count: preState.count + +preState.diff

      };
    });
  }

  handleSubtract = ()=>{
    this.setState((preState, props) => {
      return {
        count: preState.count - preState.diff
      };
    });
  }

  onDiffInputChange = (e) => {
    console.log(e.target);
    this.setState({diff: e.target.value});
  }

  render() {
    return (
      <section className="App" >
          <Welcome name="Nick"  isTeacher />
          <Welcome name="Jack"  />

          <Counter
            count = {this.state.count}
            diff = {this.state.diff}
            onDiffInputChange = {this.onDiffInputChange}
            handleAdd = {this.handleAdd}
            handleSubtract = {this.handleSubtract}
          />
          <WelcomeForm />
      </section>
    );
  }
}

export default App;
