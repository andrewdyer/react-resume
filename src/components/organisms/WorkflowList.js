import React from 'react';
import PropTypes from 'prop-types';
import { WorkflowListItem } from '../molecules';

const WorkflowList = ({ arrayData }) => (
    <ul className="fa-ul mb-0">
        {arrayData.map(({ description }, i) => (
            <WorkflowListItem key={i}>{description}</WorkflowListItem>
        ))}
    </ul>
);

WorkflowList.propTypes = {
    arrayData: PropTypes.array
};

WorkflowList.defaultProps = {
    arrayData: []
};

export default WorkflowList;
