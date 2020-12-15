import React from 'react';
import PropTypes from 'prop-types';
import { AwardsListItem } from '../molecules';

const AwardsList = ({ arrayData }) => (
    <ul className="fa-ul mb-0">
        {arrayData.map(({ certification, position }, i) => (
            <AwardsListItem key={i} position={position}>
                {certification}
            </AwardsListItem>
        ))}
    </ul>
);

AwardsList.propTypes = {
    arrayData: PropTypes.array
};

AwardsList.defaultProps = {
    arrayData: []
};

export default AwardsList;
