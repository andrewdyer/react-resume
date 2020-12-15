import React, { useEffect } from 'react';
import { AwardsSection } from '../templates';
import { useDispatch, useSelector } from 'react-redux';
import { getAwards } from '../../store/actions';

const Awards = () => {
    const dispatch = useDispatch();
    const awards = useSelector(state => state.awards);

    useEffect(() => {
        dispatch(getAwards());
    }, [dispatch]);

    return <AwardsSection {...awards} />;
};

export default Awards;
