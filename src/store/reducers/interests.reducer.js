import { INTERESTS } from '../../constants/actions';

export const INITIAL_STATE = {
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
