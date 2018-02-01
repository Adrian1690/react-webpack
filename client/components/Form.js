/*
    ./client/components/App.jsx
*/
import React from 'react';
import InputFormLogin from './InputForm';
import Link from './Link';

export default class Form extends React.Component {

    render() {
        return (
            <div className='content'>
                <form action="http://dev.acquirevehicles.com/user/login" acceptCharset="utf-8" method="post">
                    <fieldset className="1">
                    <InputFormLogin placeholder='email'/>
                    <InputFormLogin placeholder='password'/>
                    </fieldset>
                    <div>
                        <input value="Login" name="submit" className="btn btn-lg btn-primary btn-block" type="submit" id="form_submit" />
                        <label><input type="checkbox" /> Remember me</label>
                        <div>
                            <Link link='#' text='New in Van'/> |
                            <Link link='#' text='Forgot Password'/> |
                            <Link link='#' text='FAQ'/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}