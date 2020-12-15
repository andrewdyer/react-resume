import React, { useEffect } from 'react';
import { EducationSection } from '../templates';
import { useDispatch, useSelector } from 'react-redux';
import { getEducation } from '../../store/actions';

const Education = () => {
    const dispatch = useDispatch();
    const education = useSelector(state => state.education);

    useEffect(() => {
        dispatch(getEducation());
    }, [dispatch]);

    return <EducationSection {...education} />;
};

export default Education;
