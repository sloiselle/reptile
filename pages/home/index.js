/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import CageContainer from '../../components/CageContainer/CageContainer.js';
import RowContainer from '../../components/RowContainer/RowContainer.js';
import s from './styles.scss';
import { title, html } from './index.md';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <main>
        <RowContainer />
        <CageContainer />
      </main>
    );
  }

}

export default HomePage;
