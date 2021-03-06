import React from "react"
import {Redirect} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {AppStateType} from "../../redux/redux-store"
import {InjectedFormProps, reduxForm} from "redux-form"
import {login} from "../../redux/auths-reducer"
import {createField, Input,} from "../commons/FormsControls/FormsControls"
import {requiredField} from "../../Utils/Validation/validators"
import f from "./../commons/FormsControls/FormsControls.module.css"

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, captcha, error}) => {
    return (
        <form onSubmit = {handleSubmit}>
            {createField<LoginFormValuesKeysType>("email", [requiredField], Input,"Email")}
            {createField<LoginFormValuesKeysType>("password", [requiredField], Input,"Password", {type: "password"})}
            {createField<LoginFormValuesKeysType>("rememberMe", "", Input,"", {type: "checkbox"}, "remember me")}
            {captcha && <img src = {captcha} /> }
            {captcha && createField<LoginFormValuesKeysType>("captcha", [requiredField], Input,"Symbols")}
            { error && <div className = {f.formSummaryError}>{error}</div>}
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}
export const Login: React.FC = () => {
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if(isAuth) {
        return <Redirect to = {"/profile"} />
    }
    return  <div>
        <h1>Login</h1>
        <LoginReduxForm captcha={captchaUrl} onSubmit={onSubmit} />
    </div>
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login',})(LoginForm)

type MapDispatchToPropsType = {
    login: (email:string, password:string, rememberMe:boolean, captcha:string) => void
}
type LoginFormOwnProps = {
    captcha: string | null
}
type LoginFormValuesKeysType = keyof LoginFormValuesType
export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
