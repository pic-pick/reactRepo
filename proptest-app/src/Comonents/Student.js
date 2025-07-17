import React from 'react';

const Student = (props) => {
    return (
        <div>
            name: {props.info.name}<br/>
            age: {props.info.age}<br/>
            year: {props.info.year}<br/>
            address: {props.info.address}<br/>

        </div>
    );
};

export default Student;