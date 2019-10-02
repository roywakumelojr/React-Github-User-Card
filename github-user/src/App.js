import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    console.log('Component Did Mount')

    fetch('https://api.github.com/users/roywakumelojr')
      .then(res => res.json())
      .then(data => this.setState({user: data}));

      fetch('https://api.github.com/users/roywakumelojr/followers')
      .then(res => res.json())
      .then(data => this.setState({followers: data}));

  }

  componentDidUpdate() {
    console.log('Component Did Update');
  }

  render() {
    return(
      <div className="App">
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    )
  }

}

function UserCard(props) {

  return(
    <div>

      <div>
        <img src={props.user.avatar_url} alt={'avatar'} />
        <h1> {props.user.name} </h1>
        <h3> {props.user.login} </h3>
        <p> Location: {props.user.location || 'Location Coming Soon'} </p>
      </div>

      <div className='FollowersList'>
        <h2 className='FollowersTitle'>Follower List</h2>
        {props.followers.map(follower => (
        <div key={follower.id}> 
          <img className='FollowerImage' src={follower.avatar_url} alt={'avatar'} />           
          <h3>{follower.login}</h3>                          
        </div>
        ))}
      </div>

    </div>
  );    
}

export default App;