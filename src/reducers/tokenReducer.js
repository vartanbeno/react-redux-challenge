import { UPDATE_TOKEN } from '../actions/tokenActions';

const tokenReducer = (state = '', action) => {
    switch (action.type) {
        case UPDATE_TOKEN:
            return action.payload.token;
        default:
            return state;
    }
};

export default tokenReducer;
