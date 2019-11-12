import React, { Component } from 'react';
import FirstChild from './firstChild';

class ParentComponent extends Component {
    render(){
        return (
            <h1>
                <div>I'm from Parent Component</div>
                <FirstChild/>
            </h1>
        )
    }
}

export default ParentComponent;