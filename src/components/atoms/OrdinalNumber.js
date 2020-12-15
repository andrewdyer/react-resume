import React from 'react';

const OrdinalNumber = ({ number }) => {
    if (number === 1) {
        return (
            <>
                1<sup>st</sup> Place
            </>
        );
    }

    if (number === 2) {
        return (
            <>
                2<sup>nd</sup> Place
            </>
        );
    }

    if (number === 3) {
        return (
            <>
                3<sup>rd</sup> Place
            </>
        );
    }

    return null;
};

export default OrdinalNumber;
