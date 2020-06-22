import React from 'react'
import {NavLink, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {Home} from "./Home";



 class Navigation extends React.Component{
     constructor(props) {
         super(props);
     }
    render() {
        return (
            <div >
                <nav className={'navbar navbar-dark navbar-expand-lg bg-primary'}>
                    <div className="navbar-brand">Регистрация</div>
                    <ul className={'navbar-nav'}>
                        {this.props.isLoggin ? <li className={'nav-item dropdown'}><NavLink to="/" exact className = "nav-link">Домой</NavLink></li> : <li className={'nav-item dropdown'}><NavLink to="/login"  className = "nav-link"> Зарегестрироваться </NavLink></li>}
                    </ul>
                </nav>
            </div>
        )
    }
}
const mapStatetoProps = state =>{
    return {
        isLoggin: state.isLog.isLoggined
    }
}
export default connect(mapStatetoProps)(Navigation)