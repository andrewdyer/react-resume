import { EDUCATION } from '../../constants/actions';

const INITIAL_STATE = {
    education: []
};

const educationReducer = (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
        case EDUCATION:
            return { ...state, education: payload.education };

        default:
            return state;
    }
};

export default educationReducer;
