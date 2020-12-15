import React from 'react';
import PropTypes from 'prop-types';

const SubHeading = ({ children }) => <div className="subheading mb-3">{children}</div>;

SubHeading.propTypes = {
    children: PropTypes.string.isRequired
};

SubHeading.defaultProps = {};

export default SubHeading;
