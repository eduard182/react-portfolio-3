
import './Project.less';
import React, { PropTypes } from 'react';


class Project {

  static propTypes = {
    name : React.PropTypes.string
  };

  render() {
    return (
      <div className="Project">
        <p>This is a project titled {this.props.name}</p> 
      </div>
    );
  }
}

export default Project;
