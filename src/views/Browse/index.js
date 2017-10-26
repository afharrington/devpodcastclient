import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecent, fetchShow } from '../../actions/actions.js';
import Search from '../../components/Search';
import Header from '../../components/Header';
import './browse.css';

class Browse extends Component {

  render() {
    return (
      <div className='browse content-container'>
        <Header title={'Search Shows'}/>
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   return { recent: state.recent };
// }

export default Browse;
