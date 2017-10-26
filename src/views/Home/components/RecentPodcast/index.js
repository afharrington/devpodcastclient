import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import './recentPodcast.css';


class RecentPodcast extends Component {

  render() {
    const podcast = this.props.podcast;

    return (
      <Link to={`/show/${podcast._id}`}>
        <div className='recent-podcast'>
          <img src={podcast.image_url} alt={`${podcast.show_title}} cover art`}/>
          <div className='recent-podcast-show'>{podcast.show_title}</div>
          <div className='recent-podcast-episode'>{podcast.episodes[0].title}</div>
          <Moment className='recent-podcast-date' format='LL' date={podcast.published_date}/>
        </div>
      </Link>
    )
  }
};


export default RecentPodcast;
