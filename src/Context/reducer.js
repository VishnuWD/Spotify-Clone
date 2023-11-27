export const initialState = {
    user: null,
    playlists: [],
    playing:false,
    item:null,
    // remove token after developing
    // token:"BQDcqBnihuXvZjBdpZWob_vyhsxptce8V2mZYeIcmBoM65OMod_Xp2iB4QWfYBm9BZmjplfOe2UX6yOpnwjDvUpfSTqGUcj7CAvbXU-jtInxz5ARzKpCXeB-E2dSpmHZ-ga4see2kNDz66EueAtIdhc-K9t0q41jzAfl4vSYiIJgO3_wILFcFqw7VsvvpaTzjsWc1Ewn3KHMeqhiZKBm",
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