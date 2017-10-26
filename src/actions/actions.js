import axios from 'axios';

export const FETCH_RECENT = 'fetch_recent';
export const FETCH_SHOW = 'fetch_show';
export const FETCH_RECENT_EPISODES = 'fetch_recent_episodes';

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
