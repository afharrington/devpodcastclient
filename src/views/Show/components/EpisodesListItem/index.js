import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Moment from 'react-moment';
import AudioPlayer from '../AudioPlayer';

import './episodesListItem.css';

class EpisodesListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showDescription: false
    }
  }

  toggleDescription() {
    if (this.state.showDescription) {
      this.setState({ showDescription: false });
    } else {
      this.setState({ showDescription: true });
    }
  }

  renderDescription() {
    if (this.state.showDescription && this.props.episode.description) {
      return (
        <div className='episode-description'>
          <FontAwesome onClick={this.toggleDescription.bind(this)} name='times'/>
          <p className='episode-description-title' >{this.props.episode.title}</p>
          <p>{this.props.episode.description}</p>
        </div>
      )
    }
  }

  renderCaret() {
      if (this.props.episode.description) {
        return <FontAwesome
          className='show-description-icon'
          onClick={this.toggleDescription.bind(this)}
          name='chevron-right'/>
      }
  }

  render() {
    const { published_date, audio_url, title, description } = this.props.episode;
    const titleClassName = description ? 'episodes-list-title' : 'episodes-list-title episode-title-none';

    return (
      <div className='episodes-list-item'>
        <div className={titleClassName}>{title} {this.renderCaret()}</div>
        <div className='episodes-list-aired'>
          <Moment format='MM/DD/YY' date={published_date}/>
        </div>
        <div className='episodes-list-listen'>
          <AudioPlayer streamUrl={audio_url}/>
        </div>
        {this.renderDescription()}
      </div>
    )
  }
}

export default EpisodesListItem;
