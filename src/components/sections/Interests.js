import React, { useEffect } from 'react';
import { InterestsSection } from '../templates';
import { useDispatch, useSelector } from 'react-redux';
import { getInterests } from '../../store/actions';

const Interests = () => {
    const dispatch = useDispatch();
    const interests = useSelector(state => state.interests);

    useEffect(() => {
        dispatch(getInterests());
    }, [dispatch]);

    return <InterestsSection {...interests} />;
};

export default Interests;
