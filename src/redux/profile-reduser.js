import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ButInProject/profile/ADD-POST";
const SET_USER_PROFILE = "ButInProject/profile/SET-USER-PROFILE";
const SET_STATUS = "ButInProject/profile/SET-STATUS";
const DELETE_POST = "ButInProject/profile/DELETE-POST";

let initialState = {
    postData: [{message: "Hi this is my first post", like: 24, id: 1},
               {message: "Hi this is my first post", like: 24, id: 2},],
    profile: null,
    status: "",
};

const profileReduser = (state = initialState, action) => {

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
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReduser;