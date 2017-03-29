import React from 'react';
import classnames from 'classnames/bind';

import Row from '../../components/Row/Row.js';

import styles from './RowContainer.scss';
const cx = classnames.bind(styles);

const RowContainer = () => {
  return (
    <div className={cx('RowContainer')}>
      <Row extraClass='ViewAll' name='View All'/>
      <Row name='Row 1'/>
      <Row name='Row 2'/>
      <Row name='Row 3'/>
      <Row name='Row 4'/>
      <Row name='Row 5'/>
      <Row name='Row 6'/>
      <Row name='Row 7'/>
      <Row name='Row 8'/>
      <Row name='Row 9'/>
      <Row name='Row 10'/>
      <Row name='Row 11'/>
      <Row name='Row 12'/>
      <Row name='Row 13'/>
      <Row name='Row 14'/>
    </div>
  );
};

export default RowContainer;
