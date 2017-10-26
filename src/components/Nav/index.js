import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import AnimateHeight from 'react-animate-height';
import { Link } from 'react-router-dom';

import './nav.css';

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      height: 0,
    };
  }

  toggleHeight() {
    if (this.state.height === 0) {
      this.setState({ height: 'auto' });
    } else {
      this.setState({ height: 0 });
    }
  }

  render() {
    const {
      height
    } = this.state;

    return (
      <div className='nav'>
        <FontAwesome name='bars' className='hamburger' onClick={ this.toggleHeight.bind(this) }/>
        <div className='top-nav-links-container'>
          <Link to='/'><p>Home</p></Link>
          <p>Discover</p>
          <p>About</p>
        </div>
        <AnimateHeight
          duration={ 500 }
          height={ height }
          className='dropdown-menu'
          >
            <Link to='/'><p>Home</p></Link>
            <p>Discover</p>
            <p>About</p>
        </AnimateHeight>
      </div>
    )
  }

}

export default Nav;
