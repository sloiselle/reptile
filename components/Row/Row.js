import React from 'react';

import classnames from 'classnames/bind';
import styles from './Row.scss';
const cx = classnames.bind(styles);

const Row = ({name, extraClass}) => {
    return (
        <div className={cx('Row', extraClass)}>
        	<span>{name}</span>
        </div>
    );
};

export default Row;
