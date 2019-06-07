import React, {Component} from 'react';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';

const URL = 'ws://localhost:3001'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersOnline: "0",
      currentUser: {name: "Anonymous", color: "black"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    }
  this.handleChange = this.handleChange.bind(this);
  this.onCompose = this.onCompose.bind(this);
  }

  handleChange(event) {
      event.preventDefault()
      const currentUser = this.state.currentUser.name;
      const newUser = event.target.value
      const message = JSON.stringify({type: "notification", content:`${currentUser} has changed their name to ${newUser}`});
      this.connection.send(message)
      this.setState({currentUser: {name: newUser},});
  }

  onCompose(event) {
    if(event.key === 'Enter') {
      event.preventDefault()
      const newMessage = {type: "message", username: this.state.currentUser.name, content: event.target.value };
      const stringifiedMessage = JSON.stringify(newMessage);
      this.connection.send(stringifiedMessage);
      event.target.value = "";
    }
  }

  scrolltoBottom = () => {
    this.messageEnd.scrollIntoView({behavior: 'smooth'});
  }

  componentDidMount() {
    this.connection = new WebSocket(URL)

    this.connection.onopen = function (event) {
      console.log("Connected to Server")
    }

    this.connection.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const messages = this.state.messages.concat(data);
      switch(data.type) {
        case "notification":
            this.setState({
              messages: messages
            });
          break;
        case "users online":
            this.setState({
              usersOnline: data.online
            });
          break;
        case "message":
          this.setState({
              messages: messages
            });
          this.scrolltoBottom();
          break;
        default:
          throw new Error("Unknown event type")
      }
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <img className="logo" src="/assets/chattr.png" />
          <span className="usersOnline">{this.state.usersOnline} users online</span>
        </nav>
        <div className="messages-container">
          <Message />
          <MessageList messages={this.state.messages}/>
        </div>
        <div ref={el => {this.messageEnd = el; }} />
          <Chatbar
            currentUser={this.state.currentUser}
            onCompose={this.onCompose}
            handleChange={this.handleChange}
          />
     </div>
    );
  }
}
export default App;
