import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import EpisodesListItem from '../EpisodesListItem';
import ReactPlayer from 'react-player'
import './episodesList.css';

class EpisodesList extends Component {

  renderPlayer() {
    return <ReactPlayer
      url='http://traffic.libsyn.com/simpleprogrammer/How_To_Learn_EFFICIENTLY_In_Software_Development.mp3?dest-id=294141'/>
  }

  renderEpisodeItems() {
    let episodes = this.props.episodes;

    if (episodes) {
      return episodes.map(episode => {
        return (
          <EpisodesListItem key={episode._id} episode={episode}/>
        )
      });
    }
  }

  renderMoreEpisodes() {
    console.log('Render 15 more');
  }

  render() {
    return (
      <div className='episodes-list'>
        <div className='episodes-list-header'>
          <div className='episodes-list-title'>Episode Title</div>
          <div className='episodes-list-aired'>Aired</div>
          <div className='episodes-list-listen'>Listen</div>
        </div>
        <Divider/>
        <div className='episodes-list-items-container'>
          {this.renderEpisodeItems()}
        </div>
        <div className='more'>
          <p onClick={this.renderMoreEpisodes}>Show More</p>
        </div>
      </div>
    )
  }

}

export default EpisodesList;
