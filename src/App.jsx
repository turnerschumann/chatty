import React, {Component} from 'react';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';


const URL = 'ws://localhost:3001'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      usernameInput: 'Bob',
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    }

  this.handleChange = this.handleChange.bind(this);
  this.onCompose = this.onCompose.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.value);
    this.setState({currentUser: {name: event.target.value}});
  }

  onCompose(event) {
    if(event.key === 'Enter') {
      event.preventDefault()
      const newMessage = {username: this.state.currentUser.name, content: event.target.value };
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

      const messages = this.state.messages.concat(JSON.parse(event.data));
      this.setState({messages: messages})
      console.log(this.state.messages);
    }



    // console.log(this.state.messages.map( (msg, idx))
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <Message />
        <Chatbar
          currentUser={this.state.currentUser}
          onCompose={this.onCompose}
          handleChange={this.handleChange}
        />
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}
export default App;
