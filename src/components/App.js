import React, { Component } from "react"
import "../styles/main.scss"
import {Route, NavLink} from 'react-router-dom'
import Login from "./Login"
import Navigation from "./Navigation";
import Routing from "./Routing";


let hello = "Hello friend"
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

                    <Routing isTrue = {this.state.isLoggin}/>
                </div>
            </div>
        )
    }

}
export default App