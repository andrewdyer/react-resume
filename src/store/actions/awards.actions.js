import { AWARDS } from '../../constants/actions';

export const getAwards = () => ({
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
                certification: 'University of Colorado Boulder - Emerging Tech Competition 2009',
                position: 1
            },
            {
                certification:
                    'University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)',
                position: 1
            },
            {
                certification: 'University of Colorado Boulder - Emerging Tech Competition 2008',
                position: 2
            },
            {
                certification: 'James Buchanan High School - Hackathon 2006',
                position: 1
            },
            {
                certification: 'James Buchanan High School - Hackathon 2005',
                position: 3
            }
        ]
    }
});
