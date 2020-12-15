import React, { useEffect } from 'react';
import { AboutSection } from '../templates';
import { useDispatch, useSelector } from 'react-redux';
import { getAbout } from '../../store/actions';

const About = () => {
    const dispatch = useDispatch();
    const about = useSelector(state => state.about);

    useEffect(() => {
        dispatch(getAbout());
    }, [dispatch]);

    return <AboutSection {...about} />;
};

export default About;
