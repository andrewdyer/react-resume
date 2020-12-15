import { combineReducers } from 'redux';
import about from './about.reducer';
import awards from './awards.reducer';
import education from './education.reducer';
import experience from './experience.reducer';
import interests from './interests.reducer';
import skills from './skills.reducer';

export default combineReducers({ about, awards, education, experience, interests, skills });
