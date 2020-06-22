import React, {Component} from 'react'
import {connect} from "react-redux";
import {Add_login, isTrue} from "../redux/actions";

class Login extends Component{
    constructor(props){
        super(props)
    }
    submitHandler = (event) => {
        event.preventDefault();
        let array = event.target
        let auth = {
            login: array[0].value,
            password: array[1].value,
            isTrue: true
        }
        console.log(this.props.isTrue);
        auth.isTrue ? this.props.isTrue( {isLoggined: auth.isTrue}) : null
        this.props.Add_login(auth)

    }
    render() {
    return (
            <div className="row">
                <div className="col">
                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
                </div>
                <div className="col">
                    <div className="card card-label">
                        <div className="card-body">
                            <form
                            onSubmit = {this.submitHandler}>
                                <div className="form-group">
                                    <label
                                        htmlFor="login_input">Логин</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="login_input"
                                        name="login"
                                        placeholder="Логин"
                                        required

                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="password_input">Пароль</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password_input"
                                        placeholder="Пароль"
                                        required

                                    />
                                </div>
                                <div className="form-group d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary ">
                                        Зарегистрироваться
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStatetoProps = state =>{
        return {
        auth: state.auth
        }
}
const mapDispatchToProps =({
    Add_login,isTrue
})

export default connect(mapStatetoProps,mapDispatchToProps)(Login)