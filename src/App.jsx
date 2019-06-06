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
      currentUser: {name: "Anonymous"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    }

  this.handleChange = this.handleChange.bind(this);
  this.onCompose = this.onCompose.bind(this);
  }

  handleChange(event) {

      event.preventDefault()
      console.log("New username submitted")
      const currentUser = this.state.currentUser.name;
      const newUser = event.target.value
      const message = JSON.stringify({type: "notification", content:`${currentUser} has changed their name to ${newUser}`});

      this.connection.send(message)
      console.log("This was sent:" + message)
      this.setState({currentUser: {name: newUser},});

  }

  onCompose(event) {
    if(event.key === 'Enter') {
      event.preventDefault()
      const newMessage = {type: "message", username: this.state.currentUser.name, content: event.target.value };
      const stringifiedMessage = JSON.stringify(newMessage);

      this.connection.send(stringifiedMessage);

      // const messages = this.state.messages.concat(newMessage);
      // this.setState({messages: messages})
      event.target.value = "";
    }
  }



  componentDidMount() {
    console.log("componentDidMount <App />");
    this.connection = new WebSocket(URL)

    this.connection.onopen = function (event) {
      console.log("Connected to Server")
    }

    this.connection.onmessage = (event) => {

      // console.log(JSON.parse(event.data));
      const data = JSON.parse(event.data);
      console.log("Recieved data rom server: " + data.online);
      const messages = this.state.messages.concat(data);
      switch(data.type) {
        case "notification":

          // console.log("What is this: " + this);
            this.setState({
              // type: data.type,
              messages: messages
            });
          break;
        case "users online":

          // console.log("What is this: " + this);
            this.setState({
              // type: data.type,
              usersOnline: data.online
            });
              console.log("State of onlineUsers" + this.state.usersOnline)
          break;
        case "message":
          // const messages = this.state.messages.concat(data);
          this.setState({
              // type: data.type,
              messages: messages
            });
          // console.log("What is this: " + this);
          // console.log(this.state.messages);

          break;
        default:
          throw new Error("Unknown event type")
      }

    }



    // console.log(this.state.messages.map( (msg, idx))
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <span className="usersOnline">{this.state.usersOnline} users online</span>
        </nav>
        <div className="messages-container">
          <Message />
          <MessageList messages={this.state.messages}/>
        </div>
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
