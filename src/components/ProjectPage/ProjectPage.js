import './ProjectPage.less';
import React, { PropTypes } from 'react';
import SingleItemList from '../SingleItemList';
import Project from '../Project';

class ProjectPage extends React.Component {

  static propTypes = {
    projects : React.PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.handleProjectClick = this.handleProjectClick.bind(this);
    var stateObj = {};
    stateObj.selectedProject = this.props.projects[0] || {};
    this.state = stateObj;
 }

  handleProjectClick(index) {
    this.setState({selectedProject : this.props.projects[index]});
  }

  render() {
    return (
      <div className="ProjectPage">
        <div>
          <SingleItemList items={this.props.projects} handleClick={this.handleProjectClick} activeIndex={0} />
        </div>
        <div>
          <Project {...this.state.selectedProject} />
        </div>
      </div>
    );
  }

}

export default ProjectPage;
