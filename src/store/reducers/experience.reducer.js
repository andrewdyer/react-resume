import { EXPERIENCE } from '../../constants/actions';

const INITIAL_STATE = {
    experience: []
};

const experienceReducer = (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
        case EXPERIENCE:
            return { ...state, experience: payload.experience };

        default:
            return state;
    }
};

export default experienceReducer;
