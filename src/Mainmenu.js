import React, { Component } from 'react';
import Menuitem from './Menuitem';

class Mainmenu extends Component {
  render() {
    return (
      <div className="Mainmenu">
        Mainmenu
        <Menuitem label="One"/>
        <Menuitem label="Two"/>
        <Menuitem label="Three"/>
        <Menuitem label="Four"/>
      </div>
    );
  }
}

export default Mainmenu;
