/*
    ./client/components/App.jsx
*/
import React from 'react';

export default class Link extends React.Component {
    
    constructor(props){
        super(props)
    }

    render() {
        return (
            <a href={this.props.link}>{this.props.text}</a>
        )
    }
}