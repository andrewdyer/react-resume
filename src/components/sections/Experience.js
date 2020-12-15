import React, { useEffect } from 'react';
import { ExperienceSection } from '../templates';
import { useDispatch, useSelector } from 'react-redux';
import { getExperience } from '../../store/actions';

const Experience = () => {
    const dispatch = useDispatch();
    const experience = useSelector(state => state.experience);

    useEffect(() => {
        dispatch(getExperience());
    }, [dispatch]);

    return <ExperienceSection {...experience} />;
};

export default Experience;
