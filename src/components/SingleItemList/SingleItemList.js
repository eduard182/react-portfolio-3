
import './SingleItemList.less';
import React, { PropTypes } from 'react';
let rb = require('react-bootstrap');
let Button = rb.Button;
let ButtonGroup = rb.ButtonGroup;


class SingleItemList extends React.Component {

  constructor(props) {
    super(props);
  } 

  static propTypes = {
    items : React.PropTypes.array.isRequired,
    handleClick : React.PropTypes.func.isRequired,
    activeIndex : React.PropTypes.number
  };


  render() {
    //TODO: Figure out if I can refactor this using bind/etc?
    var classContext = this;
    return (
      <ButtonGroup vertical className="SingleItemList">
       {this.props.items.map(function (item, index) {
          var boundClick =  classContext.props.handleClick.bind(this, index);
          //TODO - Add in extension to passed in click handler to remove active class from sibling buttons.
          return (index === classContext.props.activeIndex) ? 
            <Button block onClick={boundClick} key={item.name}>{item.name}</Button> :
            <Button block onClick={boundClick} key={item.name}>{item.name}</Button>;
       })}
      </ButtonGroup>
    );
  }
}

export default SingleItemList;
