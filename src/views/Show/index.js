import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShow, fetchRecentEpisodes } from '../../actions/actions.js';
import EpisodesList from './components/EpisodesList';
import './show.css';

class Show extends Component {

  componentDidMount() {
    this.props.fetchShow(this.props.match.params.id);
    this.props.fetchRecentEpisodes(this.props.match.params.id);
  }

  renderShowInfo() {
    let show = this.props.show;
    if (show) {
      return (
        <div className='show-info'>
          <a href={show.show_url} target='_blank' rel='noopener noreferrer'><img src={show.image_url} alt={`${show.show_title} cover art`}/></a>
          <div className='show-title'>{show.show_title}</div>
          <div className='show-artists'><span>By</span> {show.artists}</div>
        </div>
      )
    }
  }

  renderTags() {
    let show = this.props.show;
    if (show) {
      return show.tags.map(tag => {
        return (
          <div className='tag' key={tag._id}>
            {tag.description}
          </div>
        )
      });
    }
  }

  renderEpisodes() {
    if (this.props.show && this.props.episodes) {
      return (
        <EpisodesList
          showTitle={this.props.show.show_title}
          episodes={this.props.episodes}
        />
      )
    }
  }

  render() {
    return (
      <div className='show content-container'>
        {this.renderShowInfo()}
        <div className='show-tags-container'>
          {this.renderTags()}
        </div>
        {this.renderEpisodes()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { show: state.show.showDetails, episodes: state.show.recentEpisodes };
}

export default connect(mapStateToProps, { fetchShow, fetchRecentEpisodes })(Show);
