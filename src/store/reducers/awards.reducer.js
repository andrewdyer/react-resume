import { AWARDS } from '../../constants/actions';

export const INITIAL_STATE = {
    awards: []
};

const awardsReducer = (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
        case AWARDS:
            return { ...state, awards: payload.awards };

        default:
            return state;
    }
};

export default awardsReducer;
