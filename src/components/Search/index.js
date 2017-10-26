import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { searchTitles, searchTags } from '../../actions/actions.js';
import './search.css';

const customStyles = {
  underlineStyle: {
    borderColor: '#333'
  }
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.value !== '') {
      this.props.searchTitles(this.state.value);
      // this.props.searchTags(this.state.value);
      this.setState({ value: '' });
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className='search-container'>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <span className="search-icon"><FontAwesome name='search'/></span>
          <input className={this.state.value === '' ? 'search-input' : 'search-input search-input-active'} value={this.state.value}/>
          <button className={this.state.value === '' ? 'search-button' : 'search-button-active'} type="submit" >Go</button>
        </form>
      </div>
    )
  }
};

export default connect(null, { searchTitles, searchTags })(Search);
