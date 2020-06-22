import React, { Component } from "react"
import "../styles/main.scss"
import {Route, NavLink} from 'react-router-dom'
import Login from "./Login"
import Navigation from "./Navigation";
import Routing from "./Routing";


class App extends Component{
    constructor() {
        super();
        this.state = {
            isLoggin: true
        }
    }

    render(){
        return(
            <div>
                {this.state.isLoggin ? <Navigation/>: null}
                <div className={'container mt-5'}>

                    <Routing/>
                </div>
            </div>
        )
    }

}
export default App