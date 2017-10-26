import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import ReactPlayer from 'react-player';
import Duration from './components/Duration';
import './audioPlayer.css';

class AudioPlayer extends Component {

    state = {
      url: null,
      playing: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0
    }

    load = url => {
      this.setState({
        url,
        played: 0,
        loaded: 0
      })
    }

    playPause = () => {
      this.setState({ playing: !this.state.playing })
    }

    stop = () => {
      this.setState({ url: null, playing: false })
    }

    setVolume = e => {
      this.setState({ volume: parseFloat(e.target.value) })
    }

    toggleMuted = () => {
      this.setState({ muted: !this.state.muted })
    }

    setPlaybackRate = e => {
      this.setState({ playbackRate: parseFloat(e.target.value) })
    }

    onPlay = () => {
      this.setState({ playing: true })
    }

    onPause = () => {
      this.setState({ playing: false })
    }

    onSeekMouseDown = e => {
      this.setState({ seeking: true })
    }

    onSeekChange = e => {
      this.setState({ played: parseFloat(e.target.value) })
    }

    onSeekMouseUp = e => {
      this.setState({ seeking: false })
      this.player.seekTo(parseFloat(e.target.value))
    }

    onProgress = state => {
      // We only want to update time slider if we are not currently seeking
      if (!this.state.seeking) {
        this.setState(state)
      }
    }

    renderLoadButton = (url, label) => {
      return (
        <button onClick={() => this.load(url)}>
          {label}
        </button>
      )
    }

    ref = player => {
      this.player = player
    }


  render() {
    const {
      url, playing, volume, muted,
      played, loaded, duration,
      playbackRate
    } = this.state;

    let buttonClass = playing ? 'pause-button' : 'play-button';

    return (
      <div className='audio-player'>
        <div className='audio-player-container'>
          <div className='audio-player-controls'>
            <FontAwesome className={buttonClass} onClick={playing ? this.onPause.bind(this) : this.onPlay.bind(this)} name={playing ? 'pause' : 'play'} />
            <input
               type='range' min={0} max={1} step='any'
               value={played}
               onMouseDown={this.onSeekMouseDown}
               onChange={this.onSeekChange}
               onMouseUp={this.onSeekMouseUp}
            />
          </div>
          <div className='audio-player-duration'>
            <Duration seconds={this.state.duration * this.state.played} /> <span>/</span>
            <Duration seconds={this.state.duration} />
          </div>
          <ReactPlayer
             ref={this.ref}
             className='react-player'
             width='100%'
             height='100%'
             url={this.props.streamUrl}
             playing={playing}
             playbackRate={playbackRate}
             volume={volume}
             muted={muted}
             onPlay={this.onPlay}
             onPause={this.onPause}
             onEnded={() => this.setState({ playing: false })}
             onProgress={this.onProgress}
             onDuration={duration => this.setState({ duration })}
           />
        </div>
      </div>
    )
  }
}

export default AudioPlayer;
