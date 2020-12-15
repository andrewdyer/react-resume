import { ABOUT } from '../../constants/actions';

const INITIAL_STATE = {
    forename: null,
    surname: null,
    summary: null,
    address_line_1: null,
    address_line_2: null,
    town: null,
    county: null,
    postcode: null,
    email: null,
    phone: null,
    contactInfo: []
};

const aboutReducer = (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
        case ABOUT:
            return { ...state, ...payload };
        default:
            return state;
    }
};

export default aboutReducer;
