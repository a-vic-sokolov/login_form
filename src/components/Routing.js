import React from "react"
import {Route, Redirect, Switch} from 'react-router-dom'
import Login from "./Login";
import {Home} from "./Home";

const Routing = (props)  => {
    console.log(props.isTrue)
        return(
            <div>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    {props.isTrue ? <Route path="/login" component={Login}/> : null}
                    <Redirect to={'/'}/>
                </Switch>
            </div>
            )

}
export default Routing