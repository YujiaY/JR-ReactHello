import React from 'react'
import Counter from './Counter'

const Welcome = (props) => {
  const counter = new Counter();
    return (
      <div>
        {
          props.isTeacher &&
          <strong>{`Hello, ${props.name}, I am a Teacher.` } + {counter.count}</strong>
        }
        {
          !props.isTeacher &&
          <p>{`Hello ${props.name}, I am a student.`}</p>
        }
      </div>
    );
}

export default Welcome;
