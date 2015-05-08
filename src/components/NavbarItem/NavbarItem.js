import './NavbarItem.less';
import React, { PropTypes } from 'react';

class NavbarItem {

  static propTypes = {
    title : PropTypes.string.isRequired,
    href : PropTypes.string.isRequired
  };

  render() {
    return (
        <a href={this.props.href} className="NavbarItem navbar-brand"><span>{this.props.title}</span></a>
    );
  }

}

export default NavbarItem;
