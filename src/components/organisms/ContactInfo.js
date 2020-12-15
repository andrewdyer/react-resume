import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactInfo = ({ arrayData }) => (
    <div className="social-icons">
        {arrayData.map(({ icon, href }, i) => (
            <a key={i} className="social-icon" href={href}>
                <FontAwesomeIcon icon={['fab', icon]} />
            </a>
        ))}
    </div>
);

ContactInfo.propTypes = {
    arrayData: PropTypes.array
};

ContactInfo.defaultProps = {
    arrayData: []
};

export default ContactInfo;
