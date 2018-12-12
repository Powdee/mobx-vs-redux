export default (state = {}, action: any) => {
    switch (action.type) {
        case 'PENDING_DATA':
            return {
                ...state,
                status: 'pending',
                artists: [],
                error: null,
                temp: action.name,
            }
        case 'SUCCESS_DATA':
            return {
                ...state,
                status: 'success',
                artists: action.artists,
            }
        case 'ERROR_DATA':
            return {
                error: action.error,
                status: 'error',
                temp: '',
                artists: [],
            }
        default:
            return state;
    }
}