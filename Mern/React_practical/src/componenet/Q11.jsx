import React from 'react'

export default function Student(props) {
    return (
        <div>
            <h1>Student Details</h1>
            <h4>Name: {props.name}</h4>
            <h4>Age: {props.age}</h4>
            <h4>Course: {props.Course}</h4>
        </div>
    )
}

