import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ children }) => <h2 className="mb-5">{children}</h2>;

Heading.propTypes = {
    children: PropTypes.string.isRequired
};

Heading.defaultProps = {};

export default Heading;
