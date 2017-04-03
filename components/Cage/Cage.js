import React from 'react';
import SkyLight from 'react-skylight';
import classnames from 'classnames/bind';

import styles from './Cage.scss';
const cx = classnames.bind(styles);

// const Cage = ({cageNumber, temp='N/A', hum='N/A', lightOn, alert, empty}) => {
class Cage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		let cageNumberRow,
		cageTempRow,
		cageHumidityRow,
		modalTitle,
		feedingTime,
		feedingItem,
		feedingQty;

		if (!this.props.empty) {
			cageNumberRow = <p onClick={() => this.refs.CageModal.show()} className={cx('Cage-number')}>Cage {this.props.cageNumber}</p>;
			cageTempRow = <p onClick={() => this.refs.CageModal.show()} className={cx('Cage-text')}><span className={cx('Cage-text-label')}>Temp:</span> {this.props.temp}&#8457;</p>;
			cageHumidityRow = <p onClick={() => this.refs.CageModal.show()} className={cx('Cage-text')}><span className={cx('Cage-text-label')}>Humidity:</span> {this.props.hum}%</p>;
			modalTitle = `Cage ${this.props.cageNumber}`;
		}

	  if (this.props.feedings !== undefined) {
	  	feedingTime = this.props.feedings[0].date;
	  	feedingItem = this.props.feedings[0].item;
	  	if (this.props.feedings[0].qty > 0) {
	  		feedingQty = `(x${this.props.feedings[0].qty})`;
	  	}
	  }


	  return (
	    <div
	    	className={cx(
	    		'Cage',
	    		{'Cage-light': this.props.lightOn},
	    		{'Cage-alert': this.props.alert},
	    		{'Cage-empty': this.props.empty}
    		)}
  		>
	    	{cageNumberRow}
	    	{cageTempRow}
	    	{cageHumidityRow}
	    	<SkyLight hideOnOverlayClicked className={cx('Cage-modal')} ref="CageModal" title={modalTitle}>
	    		<div className={cx('Cage-modal-details')}>
	    			<img
		    			alt={this.props.species}
		    			width={260}
		    			height={173}
		    			className={cx('Cage-modal-image')}
		    			src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Varanus_salvator_-_01.jpg/260px-Varanus_salvator_-_01.jpg'
	    			/>
	    			<div className={cx('Cage-modal-details-block')}>
		        	<p><span className={cx('Cage-modal-title')}>Name: </span>{this.props.name}</p>
		        	<p><span className={cx('Cage-modal-title')}>Species: </span>{this.props.species}</p>
		        	<p><span className={cx('Cage-modal-title')}>Sex: </span>{this.props.sex}</p>
	    			</div>
	    			<div className={cx('Cage-modal-details-block')}>
		        	<p><span className={cx('Cage-modal-title')}>Last Feeding: </span>{feedingTime}</p>
		        	<p><span className={cx('Cage-modal-title')}>Item(s) Fed: </span>{feedingItem} {feedingQty}</p>
		        	<p><span className={cx('Cage-modal-title')}>Temperature: </span>{this.props.temp}&#8457;</p>
		        	<p><span className={cx('Cage-modal-title')}>Humidity: </span>{this.props.hum}%</p>
	    			</div>
	        </div>
	        <div className={cx('Cage-modal-details')}>
		        <p><span className={cx('Cage-modal-title')}>Description: </span>{this.props.desc}</p>
	        </div>
	      </SkyLight>
	    </div>
	  );
	}
};

Cage.displayName = 'Cage';

export default Cage;
