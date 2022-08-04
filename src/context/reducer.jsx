const reducer = (state, action) => {
    switch (action.type) {
        case "LOADING__DATA":
            return {
                ...state,
                loading: true,
            };
    }

    if (action.type === 'HOME__UPDATE') {
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
            background: action.payload.background,
            loading: false,
        };

    }

    if (action.type === 'ABOUT__UPDATE') {
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
            loading: false,
        };

    }

    if (action.type === 'CONTACT__UPDATE') {
        return {
            ...state,
            loading: false,
        }
    }

    if (action.type === 'GET_SERVICES') {
        return {
            ...state,
            services: action.payload,
            loading: false,
        };
    }

    return state;
};

export default reducer;