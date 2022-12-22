

import { userAction, usersActionTypes, userState } from "../../types/user"

const initialState: userState = {
    users: [],
    loading: false,
    error: null,
}

export const userReducer = (state = initialState, action: userAction): userState => {
    switch (action.type) {
        case usersActionTypes.FETCH_USERS:
            return { loading: true, error: null, users: [] }
        case usersActionTypes.FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: action.payload }
        case usersActionTypes.FETCH_USERS_ERROR:
            return { loading: false, error: action.payload, users: [] }
        default: return state;
    }

}