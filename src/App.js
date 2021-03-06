import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";



class App extends React.Component  {
    
    state ={
        friends
    };
    //remove friend funtion
    removeFriend = id => {
        
        console.log(id);
        //filter this.state.friends for friends with an id not equal to the id being removed
        const friends = this.state.friends.filter(friend => friend.id !== id);
        //set this.state.friends equal to the new friends array
        this.setState({friends});
    };
    
    render(){
    return(
  <Wrapper> 
    <h1 className="title">Friends List</h1>
    {this.state.friends.map(friend => (
    <FriendCard
        removeFriend ={this.removeFriend}
        id={friend.id}
        name={friend.name}
        image={friend.image}
        occupation={friend.occupation}
        location= {friend.location}
        clickCount= {friend.clickCount}
    />
    ))}
  </Wrapper>
  );
}
}

export default App;
