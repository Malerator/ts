


export interface userState {
    users: any[];
    loading: boolean;
    error: null | string;
}

export enum usersActionTypes {
     FETCH_USERS = 'FETCH_USERS',
     FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
     FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface fetchUsersAction {
    type: usersActionTypes.FETCH_USERS;
}

interface fetchUsersSuccessAction {
    type: usersActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface fetchUsersErrorAction {
    type: usersActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type userAction = fetchUsersAction | fetchUsersSuccessAction | fetchUsersErrorAction;