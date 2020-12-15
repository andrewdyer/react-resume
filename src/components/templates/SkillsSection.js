import React from 'react';
import PropTypes from 'prop-types';
import { Heading, SubHeading } from '../atoms';
import { TechnologyList, WorkflowList } from '../organisms';
import { ResumeSection } from '../molecules';

const SkillsSection = ({ technologies, workflow }) => (
    <ResumeSection name="skills">
        <Heading>Skills</Heading>

        <SubHeading>Programming Languages & Tools</SubHeading>
        <TechnologyList arrayData={technologies} />

        <SubHeading>Workflow</SubHeading>
        <WorkflowList arrayData={workflow} />
    </ResumeSection>
);

SkillsSection.propTypes = {
    technologies: PropTypes.array,
    workflow: PropTypes.array
};

SkillsSection.defaultProps = {
    technologies: [],
    workflow: []
};

export default SkillsSection;
