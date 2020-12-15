import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Entity = ({ dateEnd, dateStart, description, heading, note, subHeading, last }) => (
    <div
        className={classnames('d-flex', 'flex-column', 'flex-md-row', 'justify-content-between', {
            'mb-5': !last
        })}>
        <div className="flex-grow-1">
            <h3 className="mb-0">{heading}</h3>
            {subHeading && <div className="subheading mb-3">{subHeading}</div>}
            {note && <div>{note}</div>}
            {description && <p>{description}</p>}
        </div>
        <div className="flex-shrink-0">
            <span className="text-primary">
                {dateStart} - {dateEnd}
            </span>
        </div>
    </div>
);

Entity.propTypes = {
    dateEnd: PropTypes.string.isRequired,
    dateStart: PropTypes.string.isRequired,
    description: PropTypes.string,
    heading: PropTypes.string.isRequired,
    note: PropTypes.string,
    subHeading: PropTypes.string,
    last: PropTypes.bool
};

Entity.defaultProps = {
    description: null,
    note: null,
    subHeading: null,
    last: false
};

export default Entity;
