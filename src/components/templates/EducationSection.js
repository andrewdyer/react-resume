import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../atoms';
import { ResumeSection } from '../molecules';
import { EntityList } from '../organisms';

const EducationSection = ({ education }) => (
    <ResumeSection name="education">
        <Heading>Education</Heading>
        <EntityList arrayData={education} />
    </ResumeSection>
);

EducationSection.propTypes = {
    education: PropTypes.array
};

EducationSection.defaultProps = {
    education: []
};

export default EducationSection;
