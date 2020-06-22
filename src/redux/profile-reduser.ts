import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import { PostData, ProfileType, PhotosType } from "../Types/types";

const ADD_POST = "ButInProject/profile/ADD-POST";
const SET_USER_PROFILE = "ButInProject/profile/SET-USER-PROFILE";
const SET_STATUS = "ButInProject/profile/SET-STATUS";
const DELETE_POST = "ButInProject/profile/DELETE-POST";
const SAVE_PHOTO_SUCCESS = "ButInProject/profile/SAVE-PHOTO-SUCCESS";

let initialState = {
    postData: [
        {message: "Hi this is my first post", like: 24, id: 1},
        {message: "Hi this is my first post", like: 2, id: 2},
    ] as Array<PostData>,
    profile: null as ProfileType | null,
    status: "",
    newPostText:"",
};

export type InitialStateType = typeof initialState;

const profileReduser = (state = initialState, action:any):InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {message: action.newPostText, id: 3, like: 1,};
            return {
                ...state,
                postData: [...state.postData, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id != action.postId),
            }
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType,//избавимся когда будем типизировать action
            }
        default:
            return state;
    }
}


type AddPostActionCreatorActionType = {
    type: typeof ADD_POST,
    newPostText: string,
}
export const addPostActionCreator = (newPostText:string):AddPostActionCreatorActionType => ({type: ADD_POST, newPostText})
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType,
}
export const setUserProfile = (profile:ProfileType):SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
type SetStatusActionType = {
    type: typeof SET_STATUS,
    status: string,
}
export const setStatus = (status:string):SetStatusActionType => ({type: SET_STATUS, status})
type DeletePostActionType = {
    type: typeof DELETE_POST,
    postId: number,
}
export const deletePost = (postId:number):DeletePostActionType => ({type: DELETE_POST, postId})
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType,
}
export const savePhotoSuccess = (photos:PhotosType):SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId:number) => async (dispatch:any) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId:number) => async (dispatch:any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status:string) => async (dispatch:any) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file:any) => async (dispatch:any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile:ProfileType) => async (dispatch:any, getState:any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("editProfile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReduser;