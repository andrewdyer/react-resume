import { SKILLS } from '../../constants/actions';
import skillsReducer, { INITIAL_STATE } from './skills.reducer';

describe('Store/Reducers/Skills', () => {
    it('should set the payload correctly', () => {
        expect(
            skillsReducer(INITIAL_STATE, {
                type: SKILLS,
                payload: {
                    technologies: [
                        {
                            name: 'HTML5',
                            icon: 'html5'
                        },
                        {
                            name: 'CSS3',
                            icon: 'css3-alt'
                        },
                        {
                            name: 'JavaScript',
                            icon: 'js-square'
                        }
                    ],
                    workflow: [
                        'Mobile-First, Responsive Design',
                        'Cross Browser Testing & Debugging',
                        'Cross Functional Teams',
                        'Agile Development & Scrum'
                    ]
                }
            })
        ).toEqual({
            technologies: [
                {
                    name: 'HTML5',
                    icon: 'html5'
                },
                {
                    name: 'CSS3',
                    icon: 'css3-alt'
                },
                {
                    name: 'JavaScript',
                    icon: 'js-square'
                }
            ],
            workflow: [
                'Mobile-First, Responsive Design',
                'Cross Browser Testing & Debugging',
                'Cross Functional Teams',
                'Agile Development & Scrum'
            ]
        });
    });
});
