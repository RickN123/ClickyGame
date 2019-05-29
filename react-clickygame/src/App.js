import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];

  }
  return array;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  constructor(props) {
    super(props);

    shuffle(friends);
    this.state = {
      friends,
      score: 0,
      highScore: 0,
      clickedAvengers: []
    };

  }

  clickedFriend = id => {
    shuffle(friends);

    if (this.state.clickedAvengers.includes(id)) {
      alert("This Avenger has been clicked!  You must restart!");
      this.setState({ score: 0 });
      this.setState({ clickedAvengers: [] });
    } else {

      this.setState({ clickedAvengers: [...this.state.clickedAvengers, id] });

      const newScore = this.state.score + 1;
      this.setState({
        score: newScore
      });

      if (newScore > this.state.highScore) {
        this.setState({ highScore: newScore });
      }

      if (newScore === 11) {
        alert("Congratulations, You Won!!");
        this.setState({ score: 0 });
        this.setState({ clickedAvengers: [] });
      }
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title> Avengers Match Game!  - New Score: {this.state.score}</Title>
        <Title>Click on Each Avenger Once to Win! - High Score: {this.state.highScore}</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            onClick={() => this.clickedFriend(friend.id)}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
