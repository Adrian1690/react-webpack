/*
    ./client/components/App.jsx
*/
import React from 'react';

export default class InputForm extends React.Component {
    
    constructor(props){
        super(props)
    }

    render() {
        return (
            <input className="form-control" placeholder={this.props.placeholder} required="required" name="email" value="" type="text" id="form_email" />
        )
    }
}