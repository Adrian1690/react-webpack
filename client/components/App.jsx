/*
    ./client/components/App.jsx
*/
import React from 'react';
import FormLogin  from './Form';

export default class App extends React.Component {
    render() {
        return (
            <div id ="first" style={{textAlign: 'center'}}>
                <h1>Hellooo  in running in React {React.version}</h1>
                <FormLogin />
            </div>);
    }
}