import { EXPERIENCE } from '../../constants/actions';

export const getExperience = () => ({
    type: EXPERIENCE,
    payload: {
        experience: [
            {
                heading: 'Senior Web Developer',
                subHeading: 'Intelitec Solutions',
                description:
                    'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
                dateStart: 'March 2013',
                dateEnd: 'Present'
            },
            {
                heading: 'Web Developer',
                subHeading: 'Intelitec Solutions',
                description:
                    'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along theinformation highway will close the loop on focusing solely on the bottom line.',
                dateStart: 'December 2011',
                dateEnd: 'March 2013'
            },
            {
                heading: 'Junior Web Designer',
                subHeading: 'Shout! Media Productions',
                description:
                    'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.',
                dateStart: 'July 2010',
                dateEnd: 'December 2011'
            },
            {
                heading: 'Web Design Intern',
                subHeading: 'Shout! Media Productions',
                description:
                    'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
                dateStart: 'September 2008',
                dateEnd: 'June 2010'
            }
        ]
    }
});
