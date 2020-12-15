import { AWARDS } from '../../constants/actions';
import awardsReducer, { INITIAL_STATE } from './awards.reducer';

describe('Store/Reducers/Awards', () => {
    it('should set the payload correctly', () => {
        expect(
            awardsReducer(INITIAL_STATE, {
                type: AWARDS,
                payload: {
                    awards: [
                        {
                            certification: 'Google Analytics Certified Developer',
                            position: null
                        },
                        {
                            certification: 'Mobile Web Specialist - Google Certification',
                            position: null
                        },
                        {
                            certification:
                                'University of Colorado Boulder - Emerging Tech Competition 2009',
                            position: 1
                        }
                    ]
                }
            })
        ).toEqual({
            awards: [
                {
                    certification: 'Google Analytics Certified Developer',
                    position: null
                },
                {
                    certification: 'Mobile Web Specialist - Google Certification',
                    position: null
                },
                {
                    certification:
                        'University of Colorado Boulder - Emerging Tech Competition 2009',
                    position: 1
                }
            ]
        });
    });
});
