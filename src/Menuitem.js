import React, { Component } from 'react';

class Menuitem extends Component {
  render() {
    return (
      <div className="Menuitem">
        {this.props.label}
      </div>
    );
  }
}

export default Menuitem;
