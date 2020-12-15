import React from 'react';
import PropTypes from 'prop-types';
import { ContactInfo } from '../organisms';
import { ResumeSection } from '../molecules';

const AboutSection = ({
    forename,
    surname,
    summary,
    address_line_1,
    town,
    county,
    postcode,
    phone,
    email,
    contactInfo
}) => (
    <ResumeSection name="about">
        <h1 className="mb-0">
            {forename}
            <span className="text-primary">{surname}</span>
        </h1>
        <div className="subheading mb-5">
            {address_line_1} · {town}, {county} {postcode} · {phone} ·<a href={email}>{email}</a>
        </div>
        <p className="lead mb-5">{summary}</p>
        <ContactInfo arrayData={contactInfo} />
    </ResumeSection>
);

AboutSection.propTypes = {
    forename: PropTypes.string,
    surname: PropTypes.string,
    summary: PropTypes.string,
    address_line_1: PropTypes.string,
    town: PropTypes.string,
    county: PropTypes.string,
    postcode: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    contactInfo: PropTypes.array
};

AboutSection.defaultProps = {
    forename: null,
    surname: null,
    summary: null,
    address_line_1: null,
    town: null,
    county: null,
    postcode: null,
    phone: null,
    email: null,
    contactInfo: null
};

export default AboutSection;
