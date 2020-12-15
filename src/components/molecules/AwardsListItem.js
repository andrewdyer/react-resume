import React from 'react';
import PropTypes from 'prop-types';
import { OrdinalNumber, TrophyIcon } from '../atoms';

const AwardsListItem = ({ children, position }) => (
    <li>
        <span className="fa-li">
            <TrophyIcon />
        </span>
        {position && <OrdinalNumber number={position} />} {children}
    </li>
);

AwardsListItem.propTypes = {
    children: PropTypes.string.isRequired,
    position: PropTypes.number
};

AwardsListItem.defaultProps = {
    position: null
};

export default AwardsListItem;
