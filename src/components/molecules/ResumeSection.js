import React from 'react';
import PropTypes from 'prop-types';

const ResumeSection = ({ children, name }) => (
    <section id={name} className="resume-section">
        <div className="resume-section-content">{children}</div>
    </section>
);

ResumeSection.propTypes = {
    name: PropTypes.string.isRequired
};

ResumeSection.defaultProps = {};

export default ResumeSection;
