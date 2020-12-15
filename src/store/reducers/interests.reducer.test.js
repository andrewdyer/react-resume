import { INTERESTS } from '../../constants/actions';
import interestsReducer, { INITIAL_STATE } from './interests.reducer';

describe('Store/Reducers/Interests', () => {
    it('should set the payload correctly', () => {
        expect(
            interestsReducer(INITIAL_STATE, {
                type: INTERESTS,
                payload: {
                    interests: [
                        'Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.',
                        'When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.'
                    ]
                }
            })
        ).toEqual({
            interests: [
                'Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.',
                'When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.'
            ]
        });
    });
});
