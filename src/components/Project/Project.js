/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import './Project.less';
import React, { PropTypes } from 'react';


class Project {

  static propTypes = {
    name : React.PropTypes.string
  };

  componentDidMount() {
    window.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClick);
  }

  render() {
    return (
      <div className="Project">
        <p>This is a project titled {{name}}</p> 
      </div>
    );
  }

  handleClick(event) {
    if (event.button === 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.defaultPrevented) {
      return;
    }
    return;
  }

}

export default Project;
