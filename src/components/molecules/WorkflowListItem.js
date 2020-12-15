import React from 'react';
import PropTypes from 'prop-types';
import { CheckIcon } from '../atoms';

const WorkflowListItem = ({ children }) => (
    <li>
        <span className="fa-li">
            <CheckIcon />
        </span>
        {children}
    </li>
);

WorkflowListItem.propTypes = {
    children: PropTypes.string.isRequired
};

WorkflowListItem.defaultProps = {};

export default WorkflowListItem;
