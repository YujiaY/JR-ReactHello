import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   // this.state = { count:0 };
  //   // console.log('APP constructor');
  // }

  render() {
    console.log('App render');

    return (
      <section className="App">
          <Welcome name="Nick"  isTeacher />
          <Welcome name="Jack"  />

          <Counter count={0} diff={10}/>
      </section>
    );
  }
}

export default App;
