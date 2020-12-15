import React from 'react';
import PropTypes from 'prop-types';
import { TechnologyListItem } from '../molecules';

const TechnologyList = ({ arrayData }) => (
    <ul className="list-inline dev-icons">
        {arrayData.map(({ icon }, i) => (
            <TechnologyListItem key={i} icon={icon} />
        ))}
    </ul>
);

TechnologyList.propTypes = {
    arrayData: PropTypes.array
};

TechnologyList.defaultProps = {
    arrayData: []
};

export default TechnologyList;
