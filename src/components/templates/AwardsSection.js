import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../atoms';
import { AwardsList } from '../organisms';
import { ResumeSection } from '../molecules';

const AwardsSection = ({ awards }) => (
    <ResumeSection name="awards">
        <Heading>Awards & Certifications</Heading>
        <AwardsList arrayData={awards} />
    </ResumeSection>
);

AwardsSection.propTypes = {
    awards: PropTypes.array
};

AwardsSection.defaultProps = {
    awards: []
};

export default AwardsSection;
