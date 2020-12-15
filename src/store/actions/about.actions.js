import { ABOUT } from '../../constants/actions';

export const getAbout = () => ({
    type: ABOUT,
    payload: {
        forename: 'Clarence',
        surname: 'Taylor',
        summary:
            'I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
        address_line_1: '3542 Berry Street',
        address_line_2: '',
        town: 'Cheyenne Wells',
        county: 'Co',
        postcode: '80810',
        email: 'name@email.com',
        phone: '(317) 585-8468',
        contactInfo: [
            {
                href: '',
                icon: 'linkedin-in'
            },
            {
                href: '',
                icon: 'github'
            },
            {
                href: '',
                icon: 'twitter'
            },
            {
                href: '',
                icon: 'facebook-f'
            }
        ]
    }
});
