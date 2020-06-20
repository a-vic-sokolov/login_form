import React from 'react'
import {NavLink} from "react-router-dom";



export default class Navigation extends React.Component{
    render() {
        return (
            <div >
                <nav className={'navbar navbar-dark navbar-expand-lg bg-primary'}>
                    <div className="navbar-brand">Регистрация</div>
                    <ul className={'navbar-nav'}>
                        <li className={'nav-item dropdown'}>
                            <NavLink
                                to="/"
                                exact
                                className = "nav-link"
                            >
                                Домой
                            </NavLink>
                        </li>
                        <li className={'nav-item dropdown'}>
                            <NavLink
                                to="/login"
                                className = "nav-link"
                            >
                                Зарегестрироваться
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
