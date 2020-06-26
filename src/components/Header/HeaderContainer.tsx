import React from "react"
import {connect} from "react-redux"
import {AppStateType} from "../../redux/redux-store"
import {logout} from "../../redux/auths-reducer"
import Header, {DispatchPropsType, MapPropsType} from "./Header"

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {
    render() {
        return <Header {...this.props}  />
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {logout})(HeaderContainer)

