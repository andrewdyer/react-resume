import React from 'react';
import PropTypes from 'prop-types';
import { Entity } from '../molecules';

const EntityList = ({ arrayData }) => arrayData.map((entity, i) => <Entity key={i} {...entity} />);

EntityList.propTypes = {
    arrayData: PropTypes.array
};

EntityList.defaultProps = {
    arrayData: []
};

export default EntityList;
