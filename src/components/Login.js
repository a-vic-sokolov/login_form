import React from 'react'

class Login extends React.Component{
    constructor(props) {
        super(props);
    }
    submitHandler = event => {
        event.preventDefault();
        let array = event.target
        console.log(array[1].value)
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
export default Login