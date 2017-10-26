import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecent, fetchShow } from '../../actions/actions.js';
import RecentPodcast from './components/RecentPodcast';
import Header from '../../components/Header';
import './home.css';

class Home extends Component {

  componentDidMount() {
    this.props.fetchRecent();
  }

  renderRecent() {
    if (this.props.recent.length > 0) {
      return this.props.recent.map(podcast => {
        return <RecentPodcast key={podcast._id} podcast={podcast} />
      })
    }
  }

  render() {
    return (
      <div className='home content-container'>
        <Header title={'Recent Episodes'}/>
        <div className='recent-podcast-container'>
          {this.renderRecent()}
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return { recent: state.recent };
}

export default connect(mapStateToProps, { fetchRecent, fetchShow })(Home);
