import React from 'react';
import classnames from 'classnames/bind';

import Cage from '../../components/Cage/Cage.js';

import styles from './CageContainer.scss';
const cx = classnames.bind(styles);

const CageContainer = (cageList) => {

	const cageData = {
		cage1: {
			number: 1,
			name: 'Apple',
	    temp: 92,
	    hum: 60,
	    light: false,
	    species: 'Varanus Salvator',
	    sex: 'Female',
	    desc: 'Integer ac magna ut lacus laoreet tristique. Proin pharetra a magna vitae euismod. Duis vestibulum augue sapien, at auctor eros efficitur at. Quisque volutpat sagittis sollicitudin. In sed dignissim dui. Praesent varius dictum molestie. Curabitur sed erat ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam suscipit ipsum eu tellus laoreet, congue elementum tellus consectetur.',
	    feedings: [
	    	{
	    		date: '1/7/2017', 
	    		item: 'refused', 
	    		qty: 0
	    	}
    	],
	    alert: false
		},
		cage2: {
			number: 2,
			name: 'Strawberry',
	    temp: 92,
	    hum: 60,
	    light: true,
	    species: 'Varanus Salvator',
	    sex: 'Female',
	    desc: 'Integer ac magna ut lacus laoreet tristique. Proin pharetra a magna vitae euismod. Duis vestibulum augue sapien, at auctor eros efficitur at. Quisque volutpat sagittis sollicitudin. In sed dignissim dui. Praesent varius dictum molestie. Curabitur sed erat ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam suscipit ipsum eu tellus laoreet, congue elementum tellus consectetur.',
	    feedings: [
	    	{
	    		date: '1/7/2017', 
	    		item: 'refused', 
	    		qty: 0
	    	}
    	],
	    alert: false
		},
		cage3: {
			number: 3,
			temp: '82',
			hum: '50',
			light: false,
			alert: true
		},
		cage4: {},
		cage5: {},
		cage6: {},
		cage7: {},
		cage8: {},
		cage9: {},
		cage10: {
			number: 10,
			temp: '82',
			hum: '50',
			light: false,
			alert: true
		},
		cage11: {},
		cage12: {},
		cage13: {},
		cage14: {},
		cage15: {},
		cage16: {},
	};

  return (
    <div className={cx('CageContainer')}>
    	<div className={cx('CageContainer-row')}>
    		<Cage 
    			cageNumber={cageData.cage1.number}
    			temp={cageData.cage1.temp}
    			hum={cageData.cage1.hum}
    			lightOn={cageData.cage1.light}
    			alert={cageData.cage1.alert}
    			empty={cageData.cage1.number === undefined}
    			name={cageData.cage1.name}
    			species={cageData.cage1.species}
    			sex={cageData.cage1.sex}
    			feedings={cageData.cage1.feedings}
    			desc={cageData.cage1.desc}
			/>
    		<Cage 
    			cageNumber={cageData.cage2.number}
    			temp={cageData.cage2.temp}
    			hum={cageData.cage2.hum}
    			lightOn={cageData.cage2.light}
    			alert={cageData.cage2.alert}
    			empty={cageData.cage2.number === undefined}
    			name={cageData.cage2.name}
    			species={cageData.cage2.species}
    			sex={cageData.cage2.sex}
    			feedings={cageData.cage2.feedings}
    			desc={cageData.cage2.desc}
			/>
    		<Cage 
    			cageNumber={cageData.cage3.number}
    			temp={cageData.cage3.temp}
    			hum={cageData.cage3.hum}
    			lightOn={cageData.cage3.light}
    			alert={cageData.cage3.alert}
    			empty={cageData.cage3.number === undefined}
    			name={cageData.cage3.name}
    			species={cageData.cage3.species}
    			sex={cageData.cage3.sex}
    			feedings={cageData.cage3.feedings}
    			desc={cageData.cage3.desc}
			/>
    		<Cage 
    			cageNumber={cageData.cage4.number}
    			temp={cageData.cage4.temp}
    			hum={cageData.cage4.hum}
    			lightOn={cageData.cage4.light}
    			alert={cageData.cage4.alert}
    			empty={cageData.cage4.number === undefined}
    			name={cageData.cage4.name}
    			species={cageData.cage4.species}
    			sex={cageData.cage4.sex}
    			feedings={cageData.cage4.feedings}
    			desc={cageData.cage4.desc}
			/>
    	</div>
    	<div className={cx('CageContainer-row')}>
    		<Cage 
    			cageNumber={cageData.cage5.number}
    			temp={cageData.cage5.temp}
    			hum={cageData.cage5.hum}
    			lightOn={cageData.cage5.light}
    			alert={cageData.cage5.alert}
    			empty={cageData.cage5.number === undefined}
    			name={cageData.cage5.name}
    			species={cageData.cage5.species}
    			sex={cageData.cage5.sex}
    			feedings={cageData.cage5.feedings}
    			desc={cageData.cage5.desc}
			/>
    		<Cage 
    			cageNumber={cageData.cage6.number}
    			temp={cageData.cage6.temp}
    			hum={cageData.cage6.hum}
    			lightOn={cageData.cage6.light}
    			alert={cageData.cage6.alert}
    			empty={cageData.cage6.number === undefined}
    			name={cageData.cage6.name}
    			species={cageData.cage6.species}
    			sex={cageData.cage6.sex}
    			feedings={cageData.cage6.feedings}
    			desc={cageData.cage6.desc}
			/>
    		<Cage 
    			cageNumber={cageData.cage7.number}
    			temp={cageData.cage7.temp}
    			hum={cageData.cage7.hum}
    			lightOn={cageData.cage7.light}
    			alert={cageData.cage7.alert}
    			empty={cageData.cage7.number === undefined}
    			name={cageData.cage7.name}
    			species={cageData.cage7.species}
    			sex={cageData.cage7.sex}
    			feedings={cageData.cage7.feedings}
    			desc={cageData.cage7.desc}
			/>
    		<Cage 
    			cageNumber={cageData.cage8.number}
    			temp={cageData.cage8.temp}
    			hum={cageData.cage8.hum}
    			lightOn={cageData.cage8.light}
    			alert={cageData.cage8.alert}
    			empty={cageData.cage8.number === undefined}
    			name={cageData.cage8.name}
    			species={cageData.cage8.species}
    			sex={cageData.cage8.sex}
    			feedings={cageData.cage8.feedings}
    			desc={cageData.cage8.desc}
			/>
    	</div>
    	<div className={cx('CageContainer-row')}>
    		<Cage 
    			cageNumber={cageData.cage9.number}
    			temp={cageData.cage9.temp}
    			hum={cageData.cage9.hum}
    			lightOn={cageData.cage9.light}
    			alert={cageData.cage9.alert}
    			empty={cageData.cage9.number === undefined}
    			name={cageData.cage9.name}
    			species={cageData.cage9.species}
    			sex={cageData.cage9.sex}
    			feedings={cageData.cage9.feedings}
    			desc={cageData.cage9.desc}
			/>
    		<Cage 
    			cageNumber={cageData.cage10.number}
    			temp={cageData.cage10.temp}
    			hum={cageData.cage10.hum}
    			lightOn={cageData.cage10.light}
    			alert={cageData.cage10.alert}
    			empty={cageData.cage10.number === undefined}
    			name={cageData.cage10.name}
    			species={cageData.cage10.species}
    			sex={cageData.cage10.sex}
    			feedings={cageData.cage10.feedings}
    			desc={cageData.cage10.desc}
			/>
    		<Cage 
    			cageNumber={cageData.cage11.number}
    			temp={cageData.cage11.temp}
    			hum={cageData.cage11.hum}
    			lightOn={cageData.cage11.light}
    			alert={cageData.cage11.alert}
    			empty={cageData.cage11.number === undefined}
    			name={cageData.cage11.name}
    			species={cageData.cage11.species}
    			sex={cageData.cage11.sex}
    			feedings={cageData.cage11.feedings}
    			desc={cageData.cage11.desc}
			/>
    		<Cage 
    			cageNumber={cageData.cage12.number}
    			temp={cageData.cage12.temp}
    			hum={cageData.cage12.hum}
    			lightOn={cageData.cage12.light}
    			alert={cageData.cage12.alert}
    			empty={cageData.cage12.number === undefined}
    			name={cageData.cage12.name}
    			species={cageData.cage12.species}
    			sex={cageData.cage12.sex}
    			feedings={cageData.cage12.feedings}
    			desc={cageData.cage12.desc}
			/>
    	</div>
    	<div className={cx('CageContainer-row')}>
    		<Cage 
    			cageNumber={cageData.cage13.number}
    			temp={cageData.cage13.temp}
    			hum={cageData.cage13.hum}
    			lightOn={cageData.cage13.light}
    			alert={cageData.cage13.alert}
    			empty={cageData.cage13.number === undefined}
    			name={cageData.cage13.name}
    			species={cageData.cage13.species}
    			sex={cageData.cage13.sex}
    			feedings={cageData.cage13.feedings}
    			desc={cageData.cage13.desc}
			/>
    		<Cage 
    			cageNumber={cageData.cage14.number}
    			temp={cageData.cage14.temp}
    			hum={cageData.cage14.hum}
    			lightOn={cageData.cage14.light}
    			alert={cageData.cage14.alert}
    			empty={cageData.cage14.number === undefined}
    			name={cageData.cage14.name}
    			species={cageData.cage14.species}
    			sex={cageData.cage14.sex}
    			feedings={cageData.cage14.feedings}
    			desc={cageData.cage14.desc}
			/>
    		<Cage 
    			cageNumber={cageData.cage15.number}
    			temp={cageData.cage15.temp}
    			hum={cageData.cage15.hum}
    			lightOn={cageData.cage15.light}
    			alert={cageData.cage15.alert}
    			empty={cageData.cage15.number === undefined}
    			name={cageData.cage15.name}
    			species={cageData.cage15.species}
    			sex={cageData.cage15.sex}
    			feedings={cageData.cage15.feedings}
    			desc={cageData.cage15.desc}
			/>
    		<Cage 
    			cageNumber={cageData.cage16.number}
    			temp={cageData.cage16.temp}
    			hum={cageData.cage16.hum}
    			lightOn={cageData.cage16.light}
    			alert={cageData.cage16.alert}
    			empty={cageData.cage16.number === undefined}
    			name={cageData.cage16.name}
    			species={cageData.cage16.species}
    			sex={cageData.cage16.sex}
    			feedings={cageData.cage16.feedings}
    			desc={cageData.cage16.desc}
			/>
    	</div>
    </div>
  );
};

export default CageContainer;
