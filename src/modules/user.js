export const TRY_LOGIN = 'login:try';
export const LOGIN_SUCCESS = 'login:success';
export const LOGIN_ERROR = 'login:error';
export const LOGIN_AUTH_ERROR = 'lofin:auth_error';
export const CLEAR_ERROR = 'login:clear';

const initialState = {
    isLoading: false,
    isError: false,
    user: {}, // set to null to enable login redirection
    message: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TRY_LOGIN:
            return {
                ...state,
                isLoading: true,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                isError: false,
                isLoading: false,
                user: action.user
            };

        case LOGIN_ERROR:
            return {
                ...state,
                isError: true,
                isLoading: false,
                message: 'Login error, please try again'
            };

        case LOGIN_AUTH_ERROR:
            return {
                ...state,
                isError: true,
                isLoading: false,
                message: 'Username or password incorrect'
            };

        case CLEAR_ERROR:
            return {
                ...state,
                isError: false,
                isLoading: false,
                message: ''
            };

        default:
            return state
    }
}

export const tryLogin = (username, password) => {
    return dispatch => {
        dispatch({
            type: TRY_LOGIN,
        });

        if (username === 'pero' && password === 'pero')
            return setTimeout(() => {
                dispatch({
                    type: LOGIN_SUCCESS,
                })
            }, 500);

        return setTimeout(() => {
            dispatch({
                type: LOGIN_AUTH_ERROR,
            })
        }, 400)
    }
};

export const clearError = () => {
    return dispatch => {
        dispatch({
            type: CLEAR_ERROR,
        });
    }
};
