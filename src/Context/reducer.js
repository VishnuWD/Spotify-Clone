export const initialState = {
    user: null,
    playlists: [],
    playing:false,
    item:null,
    // remove token after developing
    token:null,
}

const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
            case 'Set_TOKEN':
                return {
                    ...state,
                    token: action.token
                };
                case 'SET_PLAYLISTS':
                    return{
                        ...state,
                        playlists: action.playlists
                    };
                    case 'SET_DISCOVER_WEEKLY':
                        return {
                            ...state,
                            discover_weekly:action.discover_weekly,
                        }
    
        default:
            return state;
    }
}

export default reducer;