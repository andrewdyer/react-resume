import React, { useEffect } from 'react';
import { SkillsSection } from '../templates';
import { useDispatch, useSelector } from 'react-redux';
import { getSkills } from '../../store/actions';

const Skills = () => {
    const dispatch = useDispatch();
    const skills = useSelector(state => state.skills);

    useEffect(() => {
        dispatch(getSkills());
    }, [dispatch]);

    return <SkillsSection {...skills} />;
};

export default Skills;
