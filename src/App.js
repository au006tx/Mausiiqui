import React from 'react';
import './App.css';
import NewsContent from './screens/newsContent';
import Artist from './Artist';
import Tracks from './Tracks';
import { Button, Form } from 'react-bootstrap';
import Search from './search';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: null,
      tracks: [],
    }
  }

  search = (value) => {
    fetch(`${API_ADDRESS}/artist/${value}`)
      .then(response => response.json())
      .then(json => {
        if(json.artists.total > 0) {
          const artist = json.artists.items[0];
          this.setState({ artist });
          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(response => response.json() )
            .then(json => this.setState({ tracks: json.tracks }))
            .catch(error => alert(error.message));
        }
      })
      .catch(error => alert(error.message));
  }

  render(){
    console.log('this.state', this.state);
    return(
      <div className='App'> 
        <div className='App-header'>
          <h2> Mausiiquii <h6>  - by salman</h6> </h2>
        </div>
        <Search search={this.search} />
        <div>
          <br />
          <Artist artist={this.state.artist} /> 
          <br />
          <Tracks tracks={this.state.tracks} />
        </div> 
      </div>
    );
  }
}

export default App;
