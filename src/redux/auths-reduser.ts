import {authAPI, ResaultCodesEnum, securityhAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "ButInProject/auth/SET-USER-DATA";
const SET_CAPTCHA_URL = "ButInProject/auth/GET-CAPTCHA-URL";

let initialState = {
    userId: null as number|null,
    login: null as string|null,
    email: null as string|null,
    isAuth: false,
    captchaUrl:null as string|null,
};

export type InitialStateType = typeof initialState;

const authsReduser = (state = initialState, action:any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

type SetAuthUserDataActionTypePayloadType = {
    userId: number|null,
    login: string|null,
    email:string|null,
    isAuth:boolean,
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionTypePayloadType,
}

export const setAuthUserData = (userId:number|null, login:string|null, email:string|null, isAuth:boolean):SetAuthUserDataActionType => ({
        type: SET_USER_DATA,
        payload: {userId, login, email, isAuth},
})

type SetCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL,
    payload:{captchaUrl:string}
}

export const setCaptchaUrl = (captchaUrl:string):SetCaptchaUrlActionType => ({
    type: SET_CAPTCHA_URL,
    payload: {captchaUrl},
})

export const getAuthUserData = () => async (dispatch:any) => {
    let meData = await authAPI.checkAuth();
    if (meData.resultCode === ResaultCodesEnum.Success) {
        let {id, login, email} = meData.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
}

export const login = (email:string, password:string, rememberMe:boolean, captcha:string) => async (dispatch:any) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha);

    if (loginData.resultCode === ResaultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === ResaultCodesEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
        let message = loginData.messages.length > 0 ? loginData.messages[0] : "some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = () => async (dispatch:any) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch:any) => {
    const response = await securityhAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaUrl(captchaUrl));
}

export default authsReduser;