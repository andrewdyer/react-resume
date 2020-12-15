import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TechnologyListItem = ({ icon }) => (
    <li className="list-inline-item">
        <FontAwesomeIcon icon={['fab', icon]} />
    </li>
);

TechnologyListItem.propTypes = {
    icon: PropTypes.string.isRequired
};

TechnologyListItem.defaultProps = {};

export default TechnologyListItem;
