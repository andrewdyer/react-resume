import { EDUCATION } from '../../constants/actions';
import educationReducer, { INITIAL_STATE } from './education.reducer';

describe('Store/Reducers/Education', () => {
    it('should set the payload correctly', () => {
        expect(
            educationReducer(INITIAL_STATE, {
                type: EDUCATION,
                payload: {
                    education: [
                        {
                            heading: 'University of Colorado Boulder',
                            subHeading: 'Bachelor of Science',
                            note: 'Computer Science - Web Development Track',
                            description: 'GPA: 3.23',
                            dateStart: 'August 2006',
                            dateEnd: 'May 2010'
                        },
                        {
                            heading: 'James Buchanan High School',
                            subHeading: 'Technology Magnet Program',
                            description: 'GPA: 3.56',
                            dateStart: 'August 2002',
                            dateEnd: 'May 2006'
                        }
                    ]
                }
            })
        ).toEqual({
            education: [
                {
                    heading: 'University of Colorado Boulder',
                    subHeading: 'Bachelor of Science',
                    note: 'Computer Science - Web Development Track',
                    description: 'GPA: 3.23',
                    dateStart: 'August 2006',
                    dateEnd: 'May 2010'
                },
                {
                    heading: 'James Buchanan High School',
                    subHeading: 'Technology Magnet Program',
                    description: 'GPA: 3.56',
                    dateStart: 'August 2002',
                    dateEnd: 'May 2006'
                }
            ]
        });
    });
});
