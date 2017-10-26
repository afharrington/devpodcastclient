import axios from 'axios';

export const FETCH_RECENT = 'fetch_recent';
export const FETCH_SHOW = 'fetch_show';
export const FETCH_RECENT_EPISODES = 'fetch_recent_episodes';
export const SEARCH_TITLES = 'search_titles';
export const SEARCH_TAGS = 'search_tags';

// const ROOT = uri.rootUri;
const ROOT = 'http://localhost:8082';

export function fetchRecent() {
  return function(dispatch) {
    axios.get(`${ROOT}/api/podcasts/recents/15`)
      .then(response => {
        dispatch({ type: FETCH_RECENT, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export function fetchShow(id) {
  return function(dispatch) {
    axios.get(`${ROOT}/api/podcasts/${id}`)
      .then(response => {
        dispatch({ type: FETCH_SHOW, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}


export function fetchRecentEpisodes(id) {
  return function(dispatch) {
    axios.get(`${ROOT}/api/podcasts/episodes/recents/${id}`)
      .then(response => {
        dispatch({ type: FETCH_RECENT_EPISODES, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export function searchTitles(keyword) {
  return function(dispatch) {
    axios.get(`${ROOT}/api/podcasts/search/${keyword}`)
      .then(response => {
        dispatch({ type: SEARCH_TITLES, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export function searchTags(keyword) {
  return function(dispatch) {
    axios.get(`${ROOT}/api/podcasts/tag/${keyword}`)
      .then(response => {
        dispatch({ type: SEARCH_TAGS, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
