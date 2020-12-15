import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../atoms';
import { ResumeSection } from '../molecules';
import { EntityList } from '../organisms';

const ExperienceSection = ({ experience }) => (
    <ResumeSection name="experience">
        <Heading>Experience</Heading>
        <EntityList arrayData={experience} />
    </ResumeSection>
);

ExperienceSection.propTypes = {
    experience: PropTypes.array
};

ExperienceSection.defaultProps = {
    experience: []
};

export default ExperienceSection;
