import { SKILLS } from '../../constants/actions';

const INITIAL_STATE = {
    technologies: [],
    workflow: []
};

const skillsReducer = (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
        case SKILLS:
            return { ...state, technologies: payload.technologies, workflow: payload.workflow };

        default:
            return state;
    }
};

export default skillsReducer;
