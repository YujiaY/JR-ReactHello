import React from 'react'
// import Counter from './Counter'
import {connect} from 'react-redux';


const Welcome = (props) => {
    return (
      <div>
        {
          props.isTeacher &&
          <strong>{`Hello, ${props.name}, I am a Teacher.` } </strong>
        }
        {
          !props.isTeacher &&
          <p>{`Hello, ${props.name}, I am a student.`}</p>
        }
      </div>

    );
}

const mapStateToProps = state => {
  return {
    welcomeList: state.welcomeRdc.welcomeList
  }
}

export default connect(mapStateToProps)(Welcome);

// export default Welcome;
