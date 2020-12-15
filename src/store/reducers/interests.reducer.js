import { INTERESTS } from '../../constants/actions';

const INITIAL_STATE = {
    interests: []
};

const interestsReducer = (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
        case INTERESTS:
            return { ...state, interests: payload.interests };

        default:
            return state;
    }
};

export default interestsReducer;
