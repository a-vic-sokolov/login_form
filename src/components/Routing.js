import React from "react"
import {Route, Redirect, Switch} from 'react-router-dom'
import Login from "./Login";
import {Home} from "./Home";
import {connect} from "react-redux";

const Routing = (props)  => {
        return(
            <div>
                <Switch>
                    {props.isLoggin ?
                        <div>
                            <Route path="/" exact component={Home}/>
                            <Redirect to={'/'}/>
                        </div>
                        :
                        <div>
                            <Route path="/login" component={Login}/>
                            <Redirect to={'/login'}/>
                        </div>
                    }
                </Switch>
            </div>
            )

}
const mapStatetoProps = state =>{
    return {
        isLoggin: state.isLog.isLoggined
    }
}
export default connect(mapStatetoProps, null)(Routing)