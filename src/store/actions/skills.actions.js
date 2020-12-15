import { SKILLS } from '../../constants/actions';

export const getSkills = () => ({
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
            },
            {
                name: 'Angular',
                icon: 'angular'
            },
            {
                name: 'React',
                icon: 'react'
            },
            {
                name: 'Node.js',
                icon: 'node-js'
            },
            {
                name: 'Sass',
                icon: 'sass'
            },
            {
                name: 'Less',
                icon: 'less'
            },
            {
                name: 'WordPress',
                icon: 'wordpress'
            },
            {
                name: 'Gulp',
                icon: 'gulp'
            },
            {
                name: 'Grunt',
                icon: 'grunt'
            },
            {
                name: 'npm',
                icon: 'npm'
            }
        ],
        workflow: [
            {
                description: 'Mobile-First, Responsive Design'
            },
            {
                description: 'Cross Browser Testing & Debugging'
            },
            {
                description: 'Cross Functional Teams'
            },
            {
                description: 'Agile Development & Scrum'
            }
        ]
    }
});
