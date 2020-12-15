import { ABOUT } from '../../constants/actions';
import aboutReducer, { INITIAL_STATE } from './about.reducer';

describe('Store/Reducers/About', () => {
    it('should set the payload correctly', () => {
        expect(
            aboutReducer(INITIAL_STATE, {
                type: ABOUT,
                payload: {
                    forename: 'Andrew',
                    surname: 'Dyer',
                    summary: 'Full stack web developer from London.',
                    address_line_1: '28 Crown Street',
                    address_line_2: null,
                    town: 'London',
                    county: 'United Kingdom',
                    postcode: 'SW17 2TQ',
                    email: 'andrew@mail.com',
                    phone: '07712345678',
                    contactInfo: []
                }
            })
        ).toEqual({
            forename: 'Andrew',
            surname: 'Dyer',
            summary: 'Full stack web developer from London.',
            address_line_1: '28 Crown Street',
            address_line_2: null,
            town: 'London',
            county: 'United Kingdom',
            postcode: 'SW17 2TQ',
            email: 'andrew@mail.com',
            phone: '07712345678',
            contactInfo: []
        });
    });
});
