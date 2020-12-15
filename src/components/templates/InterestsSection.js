import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../atoms';
import { ResumeSection } from '../molecules';

const InterestsSection = ({ interests }) => (
    <ResumeSection name="interests">
        <Heading>Interests</Heading>
        {interests.map(({ interest }, i) => (
            <p key={i}>{interest}</p>
        ))}
    </ResumeSection>
);

InterestsSection.propTypes = {
    interests: PropTypes.array
};

InterestsSection.defaultProps = {
    interests: []
};

export default InterestsSection;
