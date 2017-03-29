import React from 'react';
import SkyLight from 'react-skylight';
import classnames from 'classnames/bind';

import styles from './CageModal.scss';
const cx = classnames.bind(styles);

class CageModal extends React.Component {
	constructor(props){
    super(props);
  }

  render() {
	  return (
	    <div>
        <section>
          <h1>React SkyLight</h1>
          <button onClick={() => this.refs.simpleDialog.show()}>Open Modal</button>
        </section>
        <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Hi, I'm a simple modal">
          Hello, I dont have any callback.
        </SkyLight>
      </div>
	  );
	}	
};

CageModal.displayName = 'CageModal';

export default CageModal;
