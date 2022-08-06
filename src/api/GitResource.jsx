
const GitResource = (state, action) => {
    switch (action.type) {
        case "LOADING__DATA":
            return {
                ...state,
                loading: true,
            };
        case "GET_USERS":
            return{
                ...state,
                loading: false,
                githubUser: action.payload.githubUser,
            };
    }
}

export default GitResource;